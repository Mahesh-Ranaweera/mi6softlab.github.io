
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym,e){this.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3920, function(sym,e){this.play(0);});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${Stage}", "click", function(sym,e){});
//Edge binding end
})("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-115364535");