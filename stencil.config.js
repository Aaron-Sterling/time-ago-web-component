exports.config = {
  namespace: 'time-ago',
  generateDistribution: true,
  generateWWW: false,
  serviceWorker: false
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
