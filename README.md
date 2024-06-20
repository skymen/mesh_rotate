<img src="./src/icon.svg" width="100" /><br>
# Mesh Rotate <br>
Description <br>
<br>
Author: skymen <br>
<sub>Made using [c3ide2-framework](https://github.com/ConstructFund/c3ide2-framework) </sub><br>

## Table of Contents
- [Usage](#usage)
- [Examples Files](#examples-files)
- [Properties](#properties)
- [Actions](#actions)
- [Conditions](#conditions)
- [Expressions](#expressions)
---
## Usage
To build the addon, run the following commands:

```
npm i
node ./build.js
```

To run the dev server, run

```
npm i
node ./dev.js
```

The build uses the pluginConfig file to generate everything else.
The main files you may want to look at would be instance.js and scriptInterface.js

## Examples Files

---
## Properties
| Property Name | Description | Type |
| --- | --- | --- |
| Rotate X | Rotate X | float |
| Rotate Y | Rotate Y | float |
| Rotate Z | Rotate Z | float |
| Use New Size | Use New Size | check |
| Width | Width | float |
| Height | Height | float |


---
## Actions
| Action | Description | Params
| --- | --- | --- |
| Set Euler Rotation | Set the rotation of the object from euler angles | Rotation X             *(number)* <br>Rotation Y             *(number)* <br>Rotation Z             *(number)* <br> |
| Set Rotation From Vectors | Set the rotation of the object from up and forward vectors | Up X             *(number)* <br>Up Y             *(number)* <br>Up Z             *(number)* <br>Forward X             *(number)* <br>Forward Y             *(number)* <br>Forward Z             *(number)* <br> |
| Set Use New Size | Set the use new size of the object | Use New Size             *(boolean)* <br> |
| Set Size | Set the size of the object | Width             *(number)* <br>Height             *(number)* <br> |


---
## Conditions
| Condition | Description | Params
| --- | --- | --- |


---
## Expressions
| Expression | Description | Return Type | Params
| --- | --- | --- | --- |
| Width | Get the width of the object | number |  | 
| Height | Get the height of the object | number |  | 
