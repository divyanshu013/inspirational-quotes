const quotes = [
	{
		quote:
			'One day you’ll wake up and there won’t be any more time to do the things you’ve always wanted. Do it now.',
		author: 'Paulo Coelho',
	},
	{
		quote:
			'I’m not afraid to die without a doubt because I know for a fact that I’ve lived every single moment I’ve been here.',
		author: 'Liam Gallagher',
	},
	{
		quote:
			'Life moves pretty fast. If you don’t stop and look around once in a while, you could miss it.',
		author: 'Ferris Bueller',
		source: 'Ferris Bueller’s Day Off',
	},
	{
		quote:
			'You either walk inside your story and own it or you stand outside your story and hustle for your worthiness.',
		author: 'Brene Brown',
	},
	{
		quote:
			'I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times, I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.',
		author: 'Michael Jordan',
	},
	{
		quote: 'The more I want to get something done, the less I call it work.',
		author: 'Richard Bach',
	},
	{
		quote: 'Logic will get you from A to B. Imagination will take you everywhere.',
		author: 'Albert Einstein',
	},
	{
		quote: 'Your life does not get better by chance. It gets better by change.',
		author: 'Jim Rohn',
	},
	{
		quote: 'If you have dreams it is your responsibility to make them happen.',
		author: 'Bel Pesce',
	},
	{
		quote:
			'I think it is often easier to make progress on mega-ambitious dreams. Since no one else is crazy enough to do it, you have little competition. In fact, there are so few people this crazy that I feel like I know them all by first name.',
		author: 'Larry Page',
	},
	{
		quote:
			'If you don’t give up, you still have a chance. And when you are small, you have to be very focused and rely on your brain, not your strength.',
		author: 'Jack Ma',
	},
	{
		quote: 'Effort only fully releases its reward after a person refuses to quit.',
		author: 'Napoleon Hill',
	},
	{
		quote:
			'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.',
		author: 'Mark Twain',
	},
	{
		quote: 'They built the pyramids without electricity, there was no app for that.',
		author: 'Noel Gallagher',
	},
	{
		quote: 'Even if you’re on the right track, you’ll get run over if you just sit there.',
		author: 'Will Rogers',
	},
	{
		quote:
			'The best way to not feel hopeless is to get up and do something. Don’t wait for good things to happen to you. If you go out and make some good things happen, you will fill the world with hope, you will fill yourself with hope.',
		author: 'Barack Obama',
	},
	{
		quote: 'When you win, say nothing. When you lose, say less.',
		author: 'Paul Brown',
	},
	{
		quote: 'What I can’t create, I do not understand.',
		author: 'Richard Feynman',
	},
	{
		quote:
			'Keep on going and the chances are you will stumble on something, perhaps when you are least expecting it. I have never heard of anyone stumbling on something sitting down.',
		author: 'Charles F. Kettering',
	},
	{
		quote: 'The day a product development process starts, it’s behind schedule and above budget.',
		author: 'Don Norman',
	},
	{
		quote: 'In theory, there is no difference between theory and practice. In practice, there is.',
		author: 'Don Norman',
	},
	{
		quote: 'Do not let what you cannot do interfere with what you can do.',
		author: 'John Wooden',
	},
	{
		quote:
			'When something annoys you, it could be because you’re living in the future… Live in the future and build what seems interesting.',
		author: 'Paul Graham',
	},
	{
		quote: 'Without passion we might all just be dead.',
		author: 'Max Payne',
	},
	{
		quote:
			'If you’re changing the world, you’re working on important things. You’re excited to get up in the morning.',
		author: 'Larry Page',
	},
	{
		quote:
			'Instead of buying your children all the things you never had, you should teach them all the things you were never taught. Material wears out but knowledge stays.',
		author: 'Bruce Lee',
	},
	{
		quote: 'Life is more than just salary',
		author: 'Michael Scott',
		source: 'The Office',
	},
	{
		quote:
			'It is easy to sit up and take notice, What is difficult is getting up and taking action.',
		author: 'Honore de Balzac',
	},
	{
		quote:
			'If you’re not embarrassed by your old code then you aren’t progressing as a programmer.',
		author: 'Unknown',
	},
	{
		quote: 'Vision without action is daydream. Action without vision is nightmare.',
		author: 'Japanese Proverb',
	},
	{
		quote:
			'The real winners in life are the people who look at every situation with an expectation that they can make it work or make it better',
		author: 'Barbara Pletcher',
	},
	{
		quote: 'If you are born poor, it is not your mistake. But if you die poor it is your mistake.',
		author: 'Bill Gates',
	},
	{
		quote: 'If I had asked people what they wanted, they would have said faster horses.',
		author: 'Henry Ford',
	},
	{
		quote:
			'Some men see things as they are and say why… I dream things that never were and say why not.',
		author: 'George Bernard Shaw',
	},
	{
		quote:
			'It’s possible to avoid failure, to always be safe. But that is also the route to a dull, uninteresting life.',
		author: 'Don Norman',
		source: 'The Design of Everyday Things',
	},
	{
		quote: 'Winning is not everything, but the effort to win is.',
		author: 'Zig Ziglar',
	},
	{
		quote: 'You make a living by what you earn; you make a life by what you give.',
		author: 'Winston Churchill',
	},
	{
		quote:
			'Keep a positive mind. Remember, a failed attempt doesn’t make you a failure — giving up does.',
		author: 'Lorii Myers',
	},
	{
		quote: 'Don’t feel good about yourself, feel good about who you could be',
		author: 'Jordan Peterson',
	},
	{
		quote: 'The real opportunity for success lies within the person and not in the job.',
		author: 'Zig Ziglar',
	},
	{
		quote: 'All our dreams can come true, if we have the courage to pursue them.',
		author: 'Walt Disney',
	},
	{
		quote: 'Great spirits have always encountered violent opposition from mediocre minds.',
		author: 'Albert Einstein',
	},
	{
		quote: 'Remove the temptation to settle for anything short of what you deserve.',
		author: 'Lorii Myers',
	},
	{
		quote: 'Use only that which works, and take it from any place you can find',
		author: 'Bruce Lee',
	},
	{
		quote: 'Great dreamers’ dreams are never fulfilled, they are always transcended',
		author: 'Alfred Lord Whitehead',
	},
	{
		quote: 'Not all those who wander are lost',
		author: 'J. R. R. Tolkien',
	},
	{
		quote: 'Writing is nature’s way of letting you know how sloppy your thinking is',
		author: 'Dick Guindon',
	},
	{
		quote: 'You discover your style when you fail, to be the person you’re trying to be',
		author: 'John Mayer',
	},
	{
		quote:
			'I always believe the hardest choices in life are the right ones and the ones that are easy are usually the wrong ones',
		author: "Johan 'N0tail' Sundstein",
	},
	{
		quote: 'Find a purpose in life so big it will challenge every capacity to be at your best.',
		author: 'David O. McKay',
	},
	{
		quote:
			'Regardless of how you feel inside, always try to look like a winner. Even if you are behind, a sustained look of control and confidence can give you a mental edge that results in victory.',
		author: 'Arthur Ashe',
	},
	{
		quote: 'The determination to win is the better part of winning.',
		author: 'Daisaku Ikeda',
	},
	{
		quote: 'Luck is a dividend of sweat. The more you sweat, the luckier you get.',
		author: 'Ray Kroc',
	},
	{
		quote: 'Remember that you are very special, no one can play your role better than you.',
		author: 'Damayanti Patra',
	},
	{
		quote: 'It isn’t the mountains ahead to climb that wear you out; it’s the pebble in your shoe.',
		author: 'Mohamad Ali',
	},
	{
		quote:
			'The last time doesn’t exist. It’s only this time. And everything is going to be different this time. There’s only now.',
		author: 'Bill Murray',
	},
	{
		quote:
			'There is nothing noble about being superior to some other man. The true nobility is in being superior to your previous self.',
		author: 'Hindu Proverb',
	},
	{
		quote: 'There is no one right way. Just figure out what works for you!',
		author: 'Lorii Myers',
	},
	{
		quote: 'Little by little, one travels far.',
		author: 'J. R. R. Tolkien',
	},
	{
		quote: 'The man who removes a mountain begins by carrying away small stones…',
		author: 'Chinese Proverb',
	},
	{
		quote:
			'Sometimes you fall before you rise, Sometimes you lose it all to find, You’ve gotta keep fighting, And get back up again',
		author: 'Myles Kennedy',
		source: 'My Champion - Alter Bridge',
	},
	{
		quote: 'Perfection is not attainable, but if we chase perfection we can catch excellence…',
		author: 'Vince Lombardi',
	},
	{
		quote: 'Courage is found in unlikely places.',
		author: 'J. R. R. Tolkien',
	},
	{
		quote: 'All we’ve to decide is what to do with the time that is given to us.',
		author: 'J. R. R. Tolkien',
	},
	{
		quote:
			'If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.',
		author: 'J. R. R. Tolkien',
	},
	{
		quote: 'Faithless is he that says farewell when the road darkens.',
		author: 'J. R. R. Tolkien',
	},
	{
		quote: 'Still round the corner there may wait, a new road or a secret or gate.',
		author: 'J. R. R. Tolkien',
	},
	{
		quote:
			'When I was a little kid, I was really scared of the dark. But then I came to understand, dark just means the absence of photons in the visible wavelength—400 to 700 nanometers. Then I thought, well it’s really silly to be afraid of a lack of photons. Then I wasn’t afraid of the dark anymore after that.',
		author: 'Elon Musk',
	},
	{
		quote:
			'I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.',
		author: 'Bruce Lee',
	},
	{
		quote:
			'Alcohol is a depressant, so it was putting me in a really bad spot, mentally. I couldn’t really tour any more if I was going to be depressed and drunk.',
		author: 'Gerard Way',
	},
	{
		quote: 'I’m an artist at living - my work of art is my life.',
		author: 'Suzuki',
	},
	{
		quote: 'Don’t do it for the money, but do it because you love music.',
		author: 'Mark Tremonti',
	},
	{
		quote: 'Life isn’t a support system for art, its the other way around',
		author: 'Stephen King',
	},
	{
		quote: 'Death exists, not as the opposite but as a part of life.',
		author: 'Haruki Murakami',
		source: 'Norwegian Wood',
	},
	{
		quote: 'This is your life, you can be anything…',
		author: ' Gary Clark',
		source: 'Drive it Like you Stole it - Sing Street',
	},
	{
		quote: 'The most dangerous enemy is that which no one fears.',
		author: 'Dan Brown',
		source: 'Angels & Demons',
	},
];

module.exports = quotes;
