<!-- 
This is an auto-generated markdown. 
You can change it in "src/HorizontalView/HorizontalView.tsx" and run build:docs to update this file.
-->
# HorizontalView
HorizontalView is used to Views in a horizontal row, and will do smooth transitions between them.
The HorizontalView will always show the latest item that get's passed in as a children.

So for this, it will only show the SecondItem.
```
<HorizontalView>
  <FirstItem />
  <SecondItem />
</HorizontalView>
```

To do transitions between the items, you just *pass* in or *remove children*. So if we update the previous example
to be like this, it will transition from the SecondItem to the FirstItem:

```
<HorizontalView>
  <FirstItem />
</HorizontalView>
```

## Using with React Router
The HorizontalView can work perfectly together with React Router. It will allow you
to have smooth transition from one Route to another.

### Example
We are building a taco app, because everyone likes tacos. It consists of 3 screens:
An overview of all available tacos (/tacos), a taco detail page (/tacos/:id) and a list of dips for that are
a good fit with that taco (/tacos/:id/dips).

If you go to `/tacos` only the first route will be matched, the `TacoList` will render.
Now you click a link in the `TacosList` it will bring you to `/tacos/8343`. React Router will
render `TacosList` and `TacosDetail` and HorizontalView do a smooth transition from `TacosList` to
`TacosDetail`.

```
<HorizontalView>
  <Route path="/tacos" component={TacosList}/>
  <Route path="/tacos/:id" component={TacosDetail}/>
  <Route path="/tacos/:id/dips" component={TacosDipsView}/>
</HorizontalView>
```
## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
|htmlElement|string|
|alignH|"none", "start", "center", "end", "space-around", "space-between"|horizontal alignment
|alignV|"none", "start", "center", "end", "stretch"|vertical alignment
|direction|"row", "column", "row-reverse", "column-reverse"|direction
|fill|boolean|Passing true, will make the view fill out available space
|wrap|"wrap", "inherit", "initial", "nowrap", "wrap-reverse"|Defining how children will wrap
|flex|number, "flex", "none", "initial", "nogrow", "grow", "auto", "noshrink"|Flex values, can be 5, 10, 15 ... 100 or 33, 66
