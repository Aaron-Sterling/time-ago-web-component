# Time Ago web component

Framework-independent Time Ago "pipe." Web component that works with Ionic, Angular, React, Vue, vanilla Javascript, etc.  Built with Stencil.js and the date-fns function ```distanceInWordsToNow```.

## Installation

```npm install time-ago-web-component --save```

## Sample Usage
```
Aquinas died <time-ago time="Date(1274, 2, 7)"></time-ago>.        // in template
Aquinas died almost 744 years ago.                                 // output
```
Second example:
```
now = new Date();                              
You entered this page <time-ago time="now"></time-ago>.  // in template
You entered this page less than 5 seconds ago.           // output (expression updates automatically)
```

### Options

#### seconds
Boolean flag, default value false. If you set it to true, the time-ago expression will include seconds when appropriate.

#### nosuffix
Boolean flag, default value false. If you set it to true, the time-ago expression will not contain "ago" at the end.

## Setup

Setup depends on which framework you are using. See [the Setup page](https://github.com/Aaron-Sterling/time-ago-web-component/blob/master/docs/setup.md) on Github for details.
