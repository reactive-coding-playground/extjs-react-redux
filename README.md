# extjs-react-redux

The root represents a subset of relevant Ext JS workspace and app folders and files. To restore the rest, one should execute the following commands

```
sencha -sdk ~/bin/Sencha/ext-6.0.0 generate workspace playground
cd playground
sencha -sdk ext generate app -classic Demo demo
```

and merge the repo with generated workspace.

To build React & Redux app, go to `react-redux-demo` folder and run `webpack`.

To start watching Ext JS app, go to the `demo` folder and run `sencha app watch`.

NOTE: the Ext JS app is configured for development profile only! If you want to setup testing/production build, you have to
 - specify `react.redux.demo.path` in corresponding .properties files
 - configure webpack config for production build
 - update `build.xml` with ant task copying the bundle into the `build` directory.

For detailed info, see the following blog post
http://reanimatter.com/2016/06/06/running-react-redux-app-in-ext-js-app-with-two-way-communication/
