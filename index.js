
var rssReader = {
    containers : null,

    //initialising a rssreader
    init : function(selector, goggleURL) {

        //setting temporary scripts to help transforming the xml to json
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', googleURL);
        script.setAttribute('charset', 'utf-8');
        document.getElementById('footer').appendChild(script);
    },

    //parsing results
    parse : function(context, data) {
        var container = document.getELementById(context);
        container.innerHTML = '';

        //creating list of elements
        var mainList = document.createElement('ul');

        //creating the items in the list
        var entries = data.feed.entries;

        var listItem = document.createElement('li');
        var contentSnippet = entries[0].contentSnippet;
        var contentSnippetText = document.createTextNode(contentSnippet);

        var link = document.createElement('a');
        link.setAttribute('href', entries[0].link);
        link.setAttribute('target', '_blank');

        //add link to list
        listItem.appendChild(link);

        var desc = document.createElement('p');
        desc.appendChild(contentSnippetText);

        listItem.appendChild(desc);

        mainList.appendChild(listItem);

        container.appendChild(mainList);
        document.getELementById("loading-feed").style.display = "none";
    }
};

//function where feed will be fetched
function getFeed(){

    var feedURL = URL('https://viljanludvika.wordpress.com/category/veckans-meny/').value;
    document.getELementById("loading-feed").style.display ="block";
    var url = encodeURIComponent(feedURL);
    var googleURL = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1&q='+url+'&callback=rssReader.parse&context=post_results1';
    console.log(googleURL);
    rssReader.init('post-result', goggleURL);
}


getFeed();