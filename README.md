# RNStarter
修改 react-native-vector-icons 支持web
参考 https://github.com/oblador/react-native-vector-icons/pull/133/commits/280adaba2514ff0af60147a8da87c734d3e8c06d

node_modules/react-native-vector-icons/lib/create-icon-set.js

```
+  } else if (Platform.OS === 'web') {
 +    var css = '@font-face {\nfont-family: \'' + fontFamily + '\';\nsrc: url(./node_modules/react-native-vector-icons/Fonts/' + fontFile + ') format(\'truetype\');\n}';
 +    var styleElement = document.createElement('style');
 +    styleElement.type = 'text/css';
 +    if (styleElement.styleSheet){
 +      styleElement.styleSheet.cssText = css;
 +    } else {
 +      styleElement.appendChild(document.createTextNode(css));
 +    }
 +    (document.head || document.getElementsByTagName('head')[0]).appendChild(styleElement);
```

# npm 之后配置icon font
Copy the MaterialIcons font file from react-native-vector-icons to your local working directory:

./node_modules/react-native-vector-icons/Fonts/MaterialIcons.ttf -> ./android/app/src/main/assets/fonts.

