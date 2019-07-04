import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import TimeInput, { getTimeRange } from './TimeInput'
import ResourceProvider from '../behaviour/ResourceProvider'

const first = (a: number[]) => a[0]
const last = (a: number[]) => a[a.length - 1]

describe('getTimeRange returns correct range', () => {
  it('with only start time', () => {
    const range = getTimeRange({ startTime: '12:15' })
    const hours = Object.keys(range).map(parseFloat)

    expect(first(hours)).toBe(12)
    expect(last(hours)).toBe(23)

    expect(first(range[12])).toBe(15)
    expect(last(range[12])).toBe(59)
    expect(range[12]).toHaveLength(45)

    expect(first(range[23])).toBe(0)
    expect(last(range[23])).toBe(59)
    expect(range[23]).toHaveLength(60)
  })

  it('with start and end time', () => {
    const range = getTimeRange({ startTime: '13:10', endTime: '16:50' })
    const hours = Object.keys(range).map(parseFloat)

    expect(first(hours)).toBe(13)
    expect(last(hours)).toBe(16)

    expect(first(range[13])).toBe(10)
    expect(last(range[16])).toBe(50)
  })

  it('with minute steps', () => {
    const range = getTimeRange({ minuteStep: 15, endTime: '22:40' })

    expect(range[0]).toEqual([0, 15, 30, 45])
    expect(range[22]).toEqual([0, 15, 30])
  })

  it('with hour steps', () => {
    const range = getTimeRange({ hourStep: 3 })
    const hours = Object.keys(range).map(parseFloat)

    expect(hours).toEqual([0, 3, 6, 9, 12, 15, 18, 21])
  })

  it('with both hour and minute steps', () => {
    const range = getTimeRange({ hourStep: 3, minuteStep: 15 })
    const hours = Object.keys(range).map(parseFloat)

    expect(hours).toEqual([0, 3, 6, 9, 12, 15, 18, 21])
    expect(range[0]).toEqual([0, 15, 30, 45])
    expect(range[21]).toEqual([0, 15, 30, 45])
  })

  it('with hour/minute steps and start/end time', () => {
    const range = getTimeRange({
      startTime: '3:15',
      endTime: '19:35',
      hourStep: 2,
      minuteStep: 10,
    })
    const hours = Object.keys(range).map(parseFloat)

    // 3 and 19 are not in a 2 hour step range
    expect(first(hours)).toEqual(4)
    expect(last(hours)).toEqual(18)
    expect(range[4]).toEqual([0, 10, 20, 30, 40, 50])
  })
})

describe('TimeInput', () => {
  afterEach(cleanup)

  it('should have correct and normalized default value', () => {
    const { getByTestId } = render(
      <ResourceProvider>
        <TimeInput defaultValue="6:15" name="time" data-testid="time-input" />
      </ResourceProvider>
    )

    expect((getByTestId('time-input') as HTMLSelectElement).value).toBe('06:15')
  })

  it('should have correct input value when 0 hours are selected', () => {
    const { getAllByDisplayValue, getByTestId } = render(
      <ResourceProvider>
        <TimeInput name="time" data-testid="time-input" />
      </ResourceProvider>
    )

    const [hourSelect, minuteSelect] = getAllByDisplayValue('--')

    fireEvent.change(hourSelect, { target: { value: '00' } })
    fireEvent.change(minuteSelect, { target: { value: '00' } })

    expect((getByTestId('time-input') as HTMLSelectElement).value).toBe('00:00')
  })

  it('should set form input value is on select', () => {
    const { getByTestId, getAllByDisplayValue } = render(
      <ResourceProvider>
        <TimeInput name="time" data-testid="time-input" />
      </ResourceProvider>
    )

    const [hourSelect, minuteSelect] = getAllByDisplayValue('--')

    fireEvent.change(hourSelect, { target: { value: '10' } })
    fireEvent.change(minuteSelect, { target: { value: '30' } })

    expect((getByTestId('time-input') as HTMLSelectElement).value).toBe('10:30')
  })

  it('should select first minute option when an hour is selected', () => {
    const { getByTestId, getByDisplayValue } = render(
      <ResourceProvider>
        <TimeInput minTime="10:15" name="time" data-testid="time-input" />
      </ResourceProvider>
    )

    fireEvent.change(getByDisplayValue('--'), { target: { value: '10' } })

    expect((getByTestId('time-input') as HTMLSelectElement).value).toBe('10:15')
  })

  it('should reset input value when hour is unset', () => {
    const { getByTestId, getByDisplayValue } = render(
      <ResourceProvider>
        <TimeInput defaultValue="10:30" name="time" data-testid="time-input" />
      </ResourceProvider>
    )

    const hourSelect = getByDisplayValue('10')

    fireEvent.change(hourSelect, { target: { value: '' } })
    expect((getByTestId('time-input') as HTMLSelectElement).value).toBe('')
  })

  it('propTypes should complain about wrong time format', () => {
    console.error = jest.fn()

    const invalidProps = {
      defaultValue: '24:00',
    }

    try {
      render(
        <ResourceProvider>
          <TimeInput {...invalidProps} name="time" />
        </ResourceProvider>
      )
    } catch (e) {}
    expect(console.error).toHaveBeenCalled()

    // Object.getOwnPropertyNames guarantees order
    Object.getOwnPropertyNames(invalidProps).forEach((prop, i) =>
      expect((console.error as any).mock.calls[i][0]).toContain(
        `Invalid prop \`${prop}\``
      )
    )
    ;(console.error as any).mockRestore()
  })
})
