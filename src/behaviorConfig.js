// WARNING: DO NOT EDIT THIS FILE, IT IS AUTOGENERATED
/** @type {import("c3ide2-types").Behavior} */
const Config = {
  addonType: "behavior",
  id: "skymen_mesh_rotate",
  name: "Mesh Rotate",
  version: "1.0.0.0",
  category:
    // "attributes",
    // "movements",
    // "other",
    "general",
  author: "skymen",
  website: "https://www.construct.net",
  documentation: "https://www.construct.net",
  description: "Rotate an object using the mesh points",
  // icon: "icon.svg", // defaults to "icon.svg" if omitted
  // addonUrl: "https://www.construct.net/en/make-games/addons/####/XXXX", // displayed in auto-generated docs
  // githubUrl: "https://github.com/skymen/XXXX", // displays latest release version in auto-generated docs
  fileDependencies: [
    /*
    {
      filename: "filename.js", // no need to include "c3runtime/" prefix
      type:
        "copy-to-output"
        "inline-script"
        "external-dom-script"
        "external-runtime-script"
        "external-css"

      // for copy-to-output only
      // fileType: "image/png"
    }
    */
  ],
  info: {
    Set: {
      IsOnlyOneAllowed: true,
      CanBeBundled: true,
      IsDeprecated: false,
    },
  },
  properties: [
    /*
    {
      type:
        "integer"
        "float"
        "percent"
        "text"
        "longtext"
        "check"
        "font"
        "combo"
        "group"
        "link"
        "info"

      id: "property_id",
      options: {
        initialValue: 0,
        interpolatable: false,

        // minValue: 0, // omit to disable
        // maxValue: 100, // omit to disable

        // for type combo only
        // items: [
        //   {itemId1: "item name1" },
        //   {itemId2: "item name2" },
        // ],

        // dragSpeedMultiplier: 1, // omit to disable

        // for type link only
        // linkCallback: `function(instOrObj) {}`,
        // linkText: "Link Text",
        // callbackType:
        //   "for-each-instance"
        //   "once-for-type"

        // for type info only
        // infoCallback: `function(inst) {}`,
      },
      name: "Property Name",
      desc: "Property Description",
    }
    */
    // rotate x, y, z, default to 0,0,0
    // boolean for "use new width/height", default to false
    // width, height, default to 0,0
    {
      type: "float",
      id: "rotx",
      options: {
        initialValue: 0,
        interpolatable: true,
      },
      name: "Rotate X",
      desc: "Rotate X",
    },
    {
      type: "float",
      id: "roty",
      options: {
        initialValue: 0,
        interpolatable: true,
      },
      name: "Rotate Y",
      desc: "Rotate Y",
    },
    {
      type: "float",
      id: "rotz",
      options: {
        initialValue: 0,
        interpolatable: true,
      },
      name: "Rotate Z",
      desc: "Rotate Z",
    },
    {
      type: "check",
      id: "useNewSize",
      options: {
        initialValue: false,
      },
      name: "Use New Size",
      desc: "Use New Size",
    },
    {
      type: "float",
      id: "width",
      options: {
        initialValue: 0,
        interpolatable: true,
      },
      name: "Width",
      desc: "Width",
    },
    {
      type: "float",
      id: "height",
      options: {
        initialValue: 0,
        interpolatable: true,
      },
      name: "Height",
      desc: "Height",
    },
  ],
  aceCategories: {
    // follows the format id: langName
    // in the ACEs refer to categories using the id, not the name
    general: "General",
  },
  Acts: {
    /*
    SampleAction: {
      // The category of the action as it appears in the add action dialog
      category: "general",

      // Forward to the instance function name
      forward: "_SampleAction",
      // Or specify a handler function
      handler: `function () {
        // Your code here
      }`,

      // Set to true to automatically generate a script interface for this action
      // Cases where you might not want this are:
      // 1- If the action params are incompatible with the script interface
      // 2- If you don't want it to appear in the script interface
      // 3- If the script interface has a better way to achieve the same thing
      autoScriptInterface: true,

      // Set to true to highlight the action in the add action dialog
      highlight: true,

      // Set to true to hide the action in the interface. False by default if not specified.
      deprecated: false,

      // Marks the action as async. Defaults to false if not specified.
      isAsync: false,

      // list of parameters
      params: [
        {
          // The id of the parameter. This is used to generate the script interface.
          // It must be unique for each parameter.
          id: "param1",
          // The name of the parameter.
          name: "Param 1",
          // The description of the parameter.
          desc: "The first parameter",

          // The type of the parameter.
          type:
            // The following types can take a default value AND be automatically generated in the script interface
            - "string"
            - "number"
            - "any"
            - "boolean"

            // The following types can take a default value but CANNOT be automatically generated in the script interface
            - "combo"

            // The following types CANNOT take a default value AND CANNOT be automatically generated in the script interface
            - "cmp"
            - "object"
            - "objectname"
            - "layer"
            - "layout"
            - "keyb"
            - "instancevar"
            - "instancevarbool"
            - "eventvar"
            - "eventvarbool"
            - "animation"
            - "objinstancevar"

          // The default value of the parameter. Can be omitted if the type is not a string, number, any, boolean or combo.
          initialValue: "the default value of the parameter",

          // Only for type "combo"
          items: [
            {"itemId1": "itemName1"},
            {"itemId2": "itemName2"},
            {"itemId3": "itemName3"},
          ],

          // Only for type "object"
          allowedPluginIds: ["Sprite", "TiledBg"],
        },
      ],

      // The name of the action as it appears in the add action dialog
      listName: "Sample Action",

      // The text that appears in the event sheet. Note, every single param must be used in the display text.
      // You can also use [b] and [i] tags.
      // You can also use the {my} tag to include the behavior icon and name.
      displayText: "{my}: Sample action [i]{0}[/i]",

      // The description of the action as it appears in the add action dialog
      description: "This is a sample action",
    },
    */
    SetRotation: {
      category: "general",
      forward: "_SetRotation",
      highlight: true,
      params: [
        {
          id: "rotx",
          name: "Rotation X",
          desc: "Rotation X",
          type: "number",
          initialValue: 0,
        },
        {
          id: "roty",
          name: "Rotation Y",
          desc: "Rotation Y",
          type: "number",
          initialValue: 0,
        },
        {
          id: "rotz",
          name: "Rotation Z",
          desc: "Rotation Z",
          type: "number",
          initialValue: 0,
        },
      ],
      listName: "Set Euler Rotation",
      displayText:
        "{my}: Set euler rotation [i]{0}[/i], [i]{1}[/i], [i]{2}[/i]",
      description: "Set the rotation of the object from euler angles",
    },
    SetFromVectors: {
      category: "general",
      forward: "_SetFromVectors",
      highlight: true,
      params: [
        {
          id: "upX",
          name: "Up X",
          desc: "Up X",
          type: "number",
          initialValue: 0,
        },
        {
          id: "upY",
          name: "Up Y",
          desc: "Up Y",
          type: "number",
          initialValue: 0,
        },
        {
          id: "upZ",
          name: "Up Z",
          desc: "Up Z",
          type: "number",
          initialValue: 1,
        },
        {
          id: "forwardX",
          name: "Forward X",
          desc: "Forward X",
          type: "number",
          initialValue: 0,
        },
        {
          id: "forwardY",
          name: "Forward Y",
          desc: "Forward Y",
          type: "number",
          initialValue: 0,
        },
        {
          id: "forwardZ",
          name: "Forward Z",
          desc: "Forward Z",
          type: "number",
          initialValue: 0,
        },
      ],
      listName: "Set Rotation From Vectors",
      displayText:
        "{my}: Set from vectors up ([i]{0}[/i], [i]{1}[/i], [i]{2}[/i]) forward ([i]{3}[/i], [i]{4}[/i], [i]{5}[/i])",
      description: "Set the rotation of the object from up and forward vectors",
    },
    SetUseNewSize: {
      category: "general",
      forward: "_SetUseNewSize",
      highlight: true,
      params: [
        {
          id: "useNewSize",
          name: "Use New Size",
          desc: "Use New Size",
          type: "boolean",
          initialValue: "true",
        },
      ],
      listName: "Set Use New Size",
      displayText: "{my}: Set use new size [i]{0}[/i]",
      description: "Set the use new size of the object",
    },
    SetSize: {
      category: "general",
      forward: "_SetSize",
      highlight: true,
      params: [
        {
          id: "width",
          name: "Width",
          desc: "Width",
          type: "number",
          initialValue: 0,
        },
        {
          id: "height",
          name: "Height",
          desc: "Height",
          type: "number",
          initialValue: 0,
        },
      ],
      listName: "Set Size",
      displayText: "{my}: Set size [i]{0}[/i], [i]{1}[/i]",
      description: "Set the size of the object",
    },
  },
  Cnds: {
    /*
    SampleCondition: {
      // The category of the action as it appears in the add condition dialog
      category: "general",

      // Forward to the instance function name
      forward: "_SampleAction",
      // Or specify a handler function
      handler: `function () {
        // Your code here
      }`,

      // Set to true to automatically generate a script interface for this condition
      // Cases where you might not want this are:
      // 1- If the condition params are incompatible with the script interface
      // 2- If you don't want it to appear in the script interface
      // 3- If the script interface has a better way to achieve the same thing
      autoScriptInterface: true,

      // Set to true to highlight the condition in the add condition dialog
      highlight: true,

      // Set to true to hide the condition in the interface. False by default if not specified.
      deprecated: false,

      // special conditions properties. These can all be omitted, and they will default to the following values:
      isTrigger: false,
      isFakeTrigger: false,
      isStatic: false,
      isLooping: false,
      isInvertible: true,
      isCompatibleWithTriggers: true,

      // list of parameters
      params: [
        {
          // The id of the parameter. This is used to generate the script interface.
          // It must be unique for each parameter.
          id: "param1",
          // The name of the parameter.
          name: "Param 1",
          // The description of the parameter.
          desc: "The first parameter",

          // The type of the parameter.
          type:
            // The following types can take a default value AND be automatically generated in the script interface
            - "string"
            - "number"
            - "any"
            - "boolean"

            // The following types can take a default value but CANNOT be automatically generated in the script interface
            - "combo"

            // The following types CANNOT take a default value AND CANNOT be automatically generated in the script interface
            - "cmp"
            - "object"
            - "objectname"
            - "layer"
            - "layout"
            - "keyb"
            - "instancevar"
            - "instancevarbool"
            - "eventvar"
            - "eventvarbool"
            - "animation"
            - "objinstancevar"

          // The default value of the parameter. Can be omitted if the type is not a string, number, any, boolean or combo.
          initialValue: "the default value of the parameter",

          // Only for type "combo"
          items: [
            {"itemId1": "itemName1"},
            {"itemId2": "itemName2"},
            {"itemId3": "itemName3"},
          ],

          // Only for type "object"
          allowedPluginIds: ["Sprite", "TiledBg"],
        },
      ],

      // The name of the condition as it appears in the add condition dialog
      listName: "Sample Condition",

      // The text that appears in the event sheet. Note, every single param must be used in the display text.
      // You can also use [b] and [i] tags.
      // You can also use the {my} tag to include the behavior icon and name.
      displayText: "{my}: Sample condition [i]{0}[/i]",

      // The description of the condition as it appears in the add condition dialog
      description: "This is a sample condition",
    },
    */
  },
  Exps: {
    /*
    SampleExpression: {
      // The category of the action as it appears in the expression picker
      category: "general",

      // Forward to the instance function name
      forward: "_SampleAction",
      // Or specify a handler function
      handler: `function () {
        // Your code here
      }`,

      // Set to true to automatically generate a script interface for this expression
      // Cases where you might not want this are:
      // 1- If you don't want it to appear in the script interface
      // 2- If the script interface has a better way to achieve the same thing
      autoScriptInterface: true,

      // Set to true to highlight the expression in the expression picker
      highlight: true,

      // Set to true to hide the expression in the interface. False by default if not specified.
      deprecated: false,

      // The type of the expression.
      returnType:
        - "string"
        - "number"
        - "any" // must be either string or number

      // Set to true if the expression is variadic. False by default if not specified.
      isVariadicParameters: false

      // list of parameters
      params: [
        {
          // The id of the parameter. This is used to generate the script interface.
          // It must be unique for each parameter.
          id: "param1",
          // The name of the parameter.
          name: "Param 1",
          // The description of the parameter.
          desc: "The first parameter",

          // The type of the parameter.
          type:
            // The following types can take a default value AND be automatically generated in the script interface
            - "string"
            - "number"
            - "any"
        },
      ],

      // The description of the expression as it appears in the expression picker
      description: "This is a sample expression",
    },
    */
    Width: {
      category: "general",
      returnType: "number",
      forward: "getWidth",
      description: "Get the width of the object",
    },
    Height: {
      category: "general",
      returnType: "number",
      forward: "getHeight",
      description: "Get the height of the object",
    },
  },
};

module.exports = Config;
