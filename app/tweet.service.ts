export class TweetService {
	
	getTweets() {
		return [
		{
			author: 'Donald J. Trump',
			handle: '@realDonaldTrump',
			image: 'http://lorempixel.com/200/200/people?1',
			message: 'Thank you to our amazing Wounded Warriors for their service. It was an honor to be with them tonight in D.C.',
			likeCount: 100,
			iLike: true,
		},
		{
			author: 'President Obama',
			handle: '@POTUS',
			image: 'http://lorempixel.com/200/200/people?2',
			message: 'Thank you for everything. My last ask is the same as my first. I\'m asking you to believe—not in my ability to create change, but in yours.',
			likeCount: 27,
			iLike: false
		}];
	}
}