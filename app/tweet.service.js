System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [
                        {
                            author: 'Donald J. Trump',
                            handle: '@realDonaldTrump',
                            image: 'http://lorempixel.com/200/200/people?1',
                            message: 'Thank you to our amazing Wounded Warriors for their service. It was an honor to be with them tonight in D.C.'
                        },
                        {
                            author: 'President Obama',
                            handle: '@POTUS',
                            image: 'http://lorempixel.com/200/200/people?1',
                            message: 'Thank you for everything. My last ask is the same as my first. I\'m asking you to believe—not in my ability to create change, but in yours.'
                        }
                    ];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map