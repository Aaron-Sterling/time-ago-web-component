# Time Ago web component

Next page: [Setup](./docs/setup)

Framework-independent Time Ago "pipe." Web component that works with Ionic, Angular, React, Vue, vanilla Javascript, etc.  Built with Stencil.js and the date-fns function ```distanceInWordsToNow```.

## Installation

```npm install time-ago-web-component --save```

## Sample Usage
```
Aquinas died <time-ago time="7 January 1274"></time-ago>.          // in template
Aquinas died about 744 years ago.                                  // output
```
You can also use your framework to bind a variable to ```time```. The input to ```time``` can be a Date, string or number. The syntax varies by framework. To use Angular as an example:
```
now = new Date();                                               // Typescript                     
You entered this page <time-ago [time]="now"                    // in template
                                seconds="true"></time-ago>.
You entered this page less than 5 seconds ago.                  // output (updates automatically)
```

### Options

#### seconds
Boolean flag, default value false. If you set it to true, the time-ago expression will include seconds when appropriate.

#### nosuffix
Boolean flag, default value false. If you set it to true, the time-ago expression will not contain "ago" at the end.


Next page: [Setup](docs/setup)
