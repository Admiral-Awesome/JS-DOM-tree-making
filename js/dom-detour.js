function getTree( node, elements, depths) {
    if (arguments.length == 1) {
    var elements = [];
    var depths = 0;
    }

    if ( node.nodeType == 1 ) {
        node.depth = depths;
        elements.push(node);
        
    }

    var children = node.childNodes;
    
    for ( var counter = 0; counter < children.length; counter++ ) {
        getTree(children[counter], elements, depths+1);
        
    }

    return elements;
}