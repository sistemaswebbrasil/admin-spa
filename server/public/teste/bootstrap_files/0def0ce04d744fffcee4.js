document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-1baaff35daab552f019ad459494450f1.css">')
document.write('<div id=\"gist11456126\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-jquery-dropzone-js\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-javascript\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> Get the template HTML and remove it from the doumenthe template HTML and remove it from the doument<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">var<\/span> previewNode <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">document<\/span>.<span class=\"pl-c1\">querySelector<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>#template<span class=\"pl-pds\">&quot;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-smi\">previewNode<\/span>.<span class=\"pl-c1\">id<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span><span class=\"pl-pds\">&quot;<\/span><\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">var<\/span> previewTemplate <span class=\"pl-k\">=<\/span> <span class=\"pl-smi\">previewNode<\/span>.<span class=\"pl-c1\">parentNode<\/span>.<span class=\"pl-smi\">innerHTML<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-smi\">previewNode<\/span>.<span class=\"pl-c1\">parentNode<\/span>.<span class=\"pl-c1\">removeChild<\/span>(previewNode);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC6\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC7\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">var<\/span> myDropzone <span class=\"pl-k\">=<\/span> <span class=\"pl-k\">new<\/span> <span class=\"pl-en\">Dropzone<\/span>(<span class=\"pl-c1\">document<\/span>.<span class=\"pl-c1\">body<\/span>, { <span class=\"pl-c\"><span class=\"pl-c\">//<\/span> Make the whole body a dropzone<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC8\" class=\"blob-code blob-code-inner js-file-line\">  url<span class=\"pl-k\">:<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>/target-url<span class=\"pl-pds\">&quot;<\/span><\/span>, <span class=\"pl-c\"><span class=\"pl-c\">//<\/span> Set the url<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC9\" class=\"blob-code blob-code-inner js-file-line\">  thumbnailWidth<span class=\"pl-k\">:<\/span> <span class=\"pl-c1\">80<\/span>,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC10\" class=\"blob-code blob-code-inner js-file-line\">  thumbnailHeight<span class=\"pl-k\">:<\/span> <span class=\"pl-c1\">80<\/span>,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC11\" class=\"blob-code blob-code-inner js-file-line\">  parallelUploads<span class=\"pl-k\">:<\/span> <span class=\"pl-c1\">20<\/span>,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC12\" class=\"blob-code blob-code-inner js-file-line\">  previewTemplate<span class=\"pl-k\">:<\/span> previewTemplate,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC13\" class=\"blob-code blob-code-inner js-file-line\">  autoQueue<span class=\"pl-k\">:<\/span> <span class=\"pl-c1\">false<\/span>, <span class=\"pl-c\"><span class=\"pl-c\">//<\/span> Make sure the files aren&#39;t queued until manually added<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC14\" class=\"blob-code blob-code-inner js-file-line\">  previewsContainer<span class=\"pl-k\">:<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>#previews<span class=\"pl-pds\">&quot;<\/span><\/span>, <span class=\"pl-c\"><span class=\"pl-c\">//<\/span> Define the container to display the previews<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC15\" class=\"blob-code blob-code-inner js-file-line\">  clickable<span class=\"pl-k\">:<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>.fileinput-button<span class=\"pl-pds\">&quot;<\/span><\/span> <span class=\"pl-c\"><span class=\"pl-c\">//<\/span> Define the element that should be used as click trigger to select files.<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC16\" class=\"blob-code blob-code-inner js-file-line\">});<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC17\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC18\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-smi\">myDropzone<\/span>.<span class=\"pl-en\">on<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>addedfile<span class=\"pl-pds\">&quot;<\/span><\/span>, <span class=\"pl-k\">function<\/span>(<span class=\"pl-smi\">file<\/span>) {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC19\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c\"><span class=\"pl-c\">//<\/span> Hookup the start button<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC20\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-smi\">file<\/span>.<span class=\"pl-smi\">previewElement<\/span>.<span class=\"pl-c1\">querySelector<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>.start<span class=\"pl-pds\">&quot;<\/span><\/span>).<span class=\"pl-en\">onclick<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-k\">function<\/span>() { <span class=\"pl-smi\">myDropzone<\/span>.<span class=\"pl-en\">enqueueFile<\/span>(file); };<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC21\" class=\"blob-code blob-code-inner js-file-line\">});<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC22\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC23\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> Update the total progress bar<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC24\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-smi\">myDropzone<\/span>.<span class=\"pl-en\">on<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>totaluploadprogress<span class=\"pl-pds\">&quot;<\/span><\/span>, <span class=\"pl-k\">function<\/span>(<span class=\"pl-smi\">progress<\/span>) {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC25\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c1\">document<\/span>.<span class=\"pl-c1\">querySelector<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>#total-progress .progress-bar<span class=\"pl-pds\">&quot;<\/span><\/span>).<span class=\"pl-c1\">style<\/span>.<span class=\"pl-c1\">width<\/span> <span class=\"pl-k\">=<\/span> progress <span class=\"pl-k\">+<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>%<span class=\"pl-pds\">&quot;<\/span><\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC26\" class=\"blob-code blob-code-inner js-file-line\">});<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC27\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC28\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-smi\">myDropzone<\/span>.<span class=\"pl-en\">on<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>sending<span class=\"pl-pds\">&quot;<\/span><\/span>, <span class=\"pl-k\">function<\/span>(<span class=\"pl-smi\">file<\/span>) {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L29\" class=\"blob-num js-line-number\" data-line-number=\"29\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC29\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c\"><span class=\"pl-c\">//<\/span> Show the total progress bar when upload starts<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L30\" class=\"blob-num js-line-number\" data-line-number=\"30\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC30\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c1\">document<\/span>.<span class=\"pl-c1\">querySelector<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>#total-progress<span class=\"pl-pds\">&quot;<\/span><\/span>).<span class=\"pl-c1\">style<\/span>.<span class=\"pl-smi\">opacity<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>1<span class=\"pl-pds\">&quot;<\/span><\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L31\" class=\"blob-num js-line-number\" data-line-number=\"31\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC31\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c\"><span class=\"pl-c\">//<\/span> And disable the start button<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L32\" class=\"blob-num js-line-number\" data-line-number=\"32\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC32\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-smi\">file<\/span>.<span class=\"pl-smi\">previewElement<\/span>.<span class=\"pl-c1\">querySelector<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>.start<span class=\"pl-pds\">&quot;<\/span><\/span>).<span class=\"pl-c1\">setAttribute<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>disabled<span class=\"pl-pds\">&quot;<\/span><\/span>, <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>disabled<span class=\"pl-pds\">&quot;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L33\" class=\"blob-num js-line-number\" data-line-number=\"33\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC33\" class=\"blob-code blob-code-inner js-file-line\">});<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L34\" class=\"blob-num js-line-number\" data-line-number=\"34\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC34\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L35\" class=\"blob-num js-line-number\" data-line-number=\"35\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC35\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> Hide the total progress bar when nothing&#39;s uploading anymore<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L36\" class=\"blob-num js-line-number\" data-line-number=\"36\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC36\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-smi\">myDropzone<\/span>.<span class=\"pl-en\">on<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>queuecomplete<span class=\"pl-pds\">&quot;<\/span><\/span>, <span class=\"pl-k\">function<\/span>(<span class=\"pl-smi\">progress<\/span>) {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L37\" class=\"blob-num js-line-number\" data-line-number=\"37\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC37\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c1\">document<\/span>.<span class=\"pl-c1\">querySelector<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>#total-progress<span class=\"pl-pds\">&quot;<\/span><\/span>).<span class=\"pl-c1\">style<\/span>.<span class=\"pl-smi\">opacity<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>0<span class=\"pl-pds\">&quot;<\/span><\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L38\" class=\"blob-num js-line-number\" data-line-number=\"38\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC38\" class=\"blob-code blob-code-inner js-file-line\">});<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L39\" class=\"blob-num js-line-number\" data-line-number=\"39\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC39\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L40\" class=\"blob-num js-line-number\" data-line-number=\"40\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC40\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> Setup the buttons for all transfers<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L41\" class=\"blob-num js-line-number\" data-line-number=\"41\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC41\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> The &quot;add files&quot; button doesn&#39;t need to be setup because the config<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L42\" class=\"blob-num js-line-number\" data-line-number=\"42\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC42\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> `clickable` has already been specified.<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L43\" class=\"blob-num js-line-number\" data-line-number=\"43\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC43\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">document<\/span>.<span class=\"pl-c1\">querySelector<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>#actions .start<span class=\"pl-pds\">&quot;<\/span><\/span>).<span class=\"pl-en\">onclick<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-k\">function<\/span>() {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L44\" class=\"blob-num js-line-number\" data-line-number=\"44\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC44\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-smi\">myDropzone<\/span>.<span class=\"pl-en\">enqueueFiles<\/span>(<span class=\"pl-smi\">myDropzone<\/span>.<span class=\"pl-en\">getFilesWithStatus<\/span>(<span class=\"pl-smi\">Dropzone<\/span>.<span class=\"pl-c1\">ADDED<\/span>));<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L45\" class=\"blob-num js-line-number\" data-line-number=\"45\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC45\" class=\"blob-code blob-code-inner js-file-line\">};<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L46\" class=\"blob-num js-line-number\" data-line-number=\"46\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC46\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">document<\/span>.<span class=\"pl-c1\">querySelector<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>#actions .cancel<span class=\"pl-pds\">&quot;<\/span><\/span>).<span class=\"pl-en\">onclick<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-k\">function<\/span>() {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L47\" class=\"blob-num js-line-number\" data-line-number=\"47\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC47\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-smi\">myDropzone<\/span>.<span class=\"pl-en\">removeAllFiles<\/span>(<span class=\"pl-c1\">true<\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-jquery-dropzone-js-L48\" class=\"blob-num js-line-number\" data-line-number=\"48\"><\/td>\n        <td id=\"file-jquery-dropzone-js-LC48\" class=\"blob-code blob-code-inner js-file-line\">};<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n  \n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/enyo/0def0ce04d744fffcee4/raw/231121ad4ae35ae41c35ffb46e2d3b8eea5f898c/jquery-dropzone.js\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/enyo/0def0ce04d744fffcee4#file-jquery-dropzone-js\">jquery-dropzone.js<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')