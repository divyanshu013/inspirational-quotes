const quotes = [
	{
		quote: 'Adding manpower to a late software project makes it later',
		author: 'Fred Brooks',
		source: 'The Mythical Man-Month',
	},
	{
		quote:
			'One day you’ll wake up and there won’t be any more time to do the things you’ve always wanted. Do it now.',
		author: 'Paulo Coelho',
	},
	{
		quote: 'Ideas are more resilient than code.',
		author: 'Jeremy Keith',
		source: 'Resilient Web Design',
	},
	{
		quote: `If you're pursuing a goal you know you can do, it's the wrong goal.`,
		author: 'Kobe Bryant',
	},
	{
		quote: 'Don’t be afraid of losing, be afraid of playing a game and not learning something.',
		author: 'Dan Heisman',
	},
	{
		quote: 'We have two lives, and the second begins when we realize we only have one.',
		author: 'Confucius',
	},
	{
		quote: 'And, when you want something, all the universe conspires in helping you to achieve it.',
		author: 'Paulo Coelho',
		source: 'The Alchemist',
	},
	{
		quote:
			'In the long run, what people think about shepherds and bakers becomes more important for them than their own destinies.',
		author: 'Paulo Coelho',
		source: 'The Alchemist',
	},
	{
		quote:
			'If you start out by promising what you don’t even have yet, you’ll lose your desire to work toward getting it.',
		author: 'Paulo Coelho',
		source: 'The Alchemist',
	},
	{
		quote:
			'And when each day is the same as the next, it’s because people fail to recognize the good things that happen in their lives every day that the sun rises.',
		author: 'Paulo Coelho',
		source: 'The Alchemist',
	},
	{
		quote: 'There was nothing to hold him back except himself.',
		author: 'Paulo Coelho',
		source: 'The Alchemist',
	},
	{
		quote:
			'I’m not afraid to die without a doubt because I know for a fact that I’ve lived every single moment I’ve been here.',
		author: 'Liam Gallagher',
	},
	{
		quote:
			'If she’s amazing, she won’t be easy. If she’s easy, she won’t be amazing. If she’s worth it, you wont give up. If you give up, you’re not worthy… Truth is, everybody is going to hurt you; you just gotta find the ones worth suffering for.',
		author: 'Bob Marley',
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
		quote: `Don’t regret anything in life. If it’s good, it’s wonderful. If it’s bad, it’s experience! When you win, you win. When you lose, you learn.`,
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
		quote: 'When we hit our lowest point, we are open to our greatest change.',
		author: 'Aang - Avatar',
	},
	{
		quote: 'You’ll never know until you try.',
		author: 'Unknown',
	},
	{
		quote: 'There’s always another way…',
		author: 'Unknown',
	},
	{
		quote: 'If you want a happy ending, that depends, of course, on where you stop your story.',
		author: 'Orson Welles',
	},
	{
		quote:
			'Even if you have a 9 to 6 job, 7 to 2 is still enough time to do some serious damage, stop watching lost.',
		author: 'Gary Vaynerchuk',
	},
	{
		quote: 'You don’t have to be great to start, but you have to start to be great.',
		author: 'Zig Ziglar',
	},
	{
		quote: 'May your choices reflect your hopes, not your fears.',
		author: 'Gary Vaynerchuk',
	},
	{
		quote: 'Winners don’t make excuses when the other side plays the game.',
		author: 'Harvey Specter',
		source: 'Suits',
	},
	{
		quote:
			'If friends you trust, gather around you; hope can take physical form and become visible.',
		author: 'Eiichiro Oda',
		source: 'One Piece',
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
		author: 'Johan ‘N0tail’ Sundstein',
	},
	{
		quote: 'Everything can work!',
		author: 'Johan ‘N0tail’ Sundstein',
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
		quote:
			'Let us think the unthinkable, let us do the undoable, let us prepare to grapple with the ineffable itself, and see if we may not eff it after all.',
		author: 'Douglas Adams',
	},
	{
		quote:
			'Winners lose much more often than losers. So if you keep losing but you’re still trying, keep it up! You’re right on track.',
		author: 'Matthew Keith Groves',
	},
	{
		quote:
			'Keep on going and the chances are you will stumble on something, perhaps when you are least expecting it. I have never heard of anyone stumbling on something sitting down.',
		author: 'Charles F. Kettering',
	},
	{
		quote:
			'Feeling grateful to or appreciative of someone or something in your life actually attracts more of the things that you appreciate and value into your life.',
		author: 'Christiane Northrup',
	},
	{
		quote:
			'You know what it’s like to wake up in the middle of the night with a vivid dream? And you know that if you don’t have a pencil and pad by the bed, it will be completely gone by the next morning. Sometimes it’s important to wake up and stop dreaming. When a really great dream shows up, grab it.',
		author: 'Larry Page',
	},
	{
		quote:
			'The best way to not feel hopeless is to get up and do something. Don’t wait for good things to happen to you. If you go out and make some good things happen, you will fill the world with hope, you will fill yourself with hope.',
		author: 'Barack Obama',
	},
	{
		quote:
			'Every day you have a choice to be honest or deceptive. If you commit to telling the truth, you will win. You’ll win more trust, you’ll win more business, and you’ll win more peace of mind. You’ll break the system and be even more successful.',
		author: 'Dale Patridge',
	},
	{
		quote:
			'Each player must accept the cards life deals him or her: but once they are in hand, he or she alone must decide how to play the cards in order to win the game.',
		author: 'Voltaire',
	},
	{
		quote:
			'A successful man is one who can lay a firm foundation with the bricks that others throw at him.',
		author: 'Sidney Greenberg',
	},
	{
		quote:
			'I always advice people - Don’t wait ! Do something when you are young, when you have no responsibilities. Invest time in yourself to have great experiences that are going to enrich you, then you can’t possibly lose.',
		author: 'Steve Jobs',
	},
	{
		quote:
			'Once a man has made a commitment to a way of life, he puts the greatest strength in the world behind him. It’s something we call heart power. Once a man has made his commitment, nothing will stop him short of success.',
		author: 'Vince Lombardi',
	},
	{
		quote:
			'Only a man who knows what it is like to be defeated can reach down to the bottom of his soul and come up with the extra ounce of power it takes to win when the match is even.',
		author: 'Mohamad Ali',
	},
	{
		quote:
			'When action grows unprofitable, gather information; when information grows unprofitable, sleep.',
		author: 'Ursula K. Le Guin',
	},
	{
		quote:
			'Sometimes you climb out of bed in the morning and you think, I’m not going to make it, but you laugh inside — remembering all the times you’ve felt that way.',
		author: 'Charles Bukowski',
	},
	{
		quote:
			'Go confidently in the direction of your dreams. Live the life you’ve imagined. As you simplify your life, the laws of the universe will be simpler.',
		author: 'Henry David Thoreau',
	},
	{
		quote:
			'You should never view your challenges as a disadvantage. Instead, it’s important for you to understand that your experience facing and overcoming adversity is actually one of your biggest advantages.',
		author: 'Michelle Obama',
	},
	{
		quote:
			'Just enjoy your tea and a cookie. And be nice to the people around you. That’s all there is. Everything else is just filling time.',
		author: 'Pieter Levels’ dad',
	},
	{
		quote:
			'The things you learn in maturity aren’t simple things such as acquiring information and skills. You learn not to engage in self-destructive behavior. You learn not to burn up energy in anxiety. You discover how to manage your tensions. You learn that self-pity and resentment are among the most toxic of drugs. You find that the world loves talent but pays off on character.',
		author: 'John Gardner',
	},
	{
		quote:
			'To be honest, I never saw MCR going past The Black Parade. I plan things pretty far in advance. I definitely knew I had the title of the second album before we’d even recorded the first. By the time I got to the third album, which didn’t have a name, I felt like that was the end. Basically the time spent after Black Parade was spent fighting against that instinct and fighting against myself. The end of Black Parade felt like a very natural ending. To go beyond that felt like betraying some sort of artistic command that I had within myself. Thank goodness they didn’t stop there!',
		author: 'Gerard Way',
	},
	{
		quote:
			'The only thing standing between us and a life filled with joy and everything we want is our very own self!',
		author: 'Rhonda Byrne',
		source: 'The Secret',
	},
	{
		quote: 'Death exists, not as the opposite but as a part of life.',
		author: 'Haruki Murakami',
		source: 'Norwegian Wood',
	},
	{
		quote: 'This is your life, you can be anything…',
		author: 'Gary Clark',
		source: 'Drive it Like you Stole it - Sing Street',
	},
	{
		quote: 'The most dangerous enemy is that which no one fears.',
		author: 'Dan Brown',
		source: 'Angels & Demons',
	},
	{
		quote:
			'The goal of terrorism is to create terror and fear. Fear undermines faith in the establishment.',
		author: 'Dan Brown',
		source: 'Angels & Demons',
	},
	{
		quote: 'Profound ideas are always obvious once they are understood.',
		author: 'Don Norman',
		source: 'The Design of Everyday Things',
	},
	{
		quote:
			'I measure my success by how happy I am, not how big the business is out how much money I’ve made.',
		author: 'Gary Vaynerchuk',
		source: 'Crush It',
	},
	{
		quote:
			'You spend so much time at work, why waste it doing anything other than what you love most? Life is too short for that.',
		author: 'Gary Vaynerchuk',
		source: 'Crush It',
	},
	{
		quote: 'Skills are cheap, passion is priceless.',
		author: 'Gary Vaynerchuk',
		source: 'Crush It',
	},
	{
		quote:
			'No matter how much you like your job, you should aim to leave it and grow your own brand and business or partner with someone to do so, because as long as you’re working for someone else you will never be living entirely true to yourself and your passion.',
		author: 'Gary Vaynerchuk',
		source: 'Crush It',
	},
	{
		quote: 'Never regret your past. Rather embrace it as the teacher that it is.',
		author: 'Robin Sharma',
		source: 'The Monk who sold his Ferrari',
	},
	{
		quote:
			'What had happened to the uncommon passion I brought to everything I did when I was younger? Back then, even the simplest of things filled me with a sense of joy. Maybe it was time for me to reinvent my destiny.',
		author: 'Robin Sharma',
		source: 'The Monk who sold his Ferrari',
	},
	{
		quote:
			'To stop spending so much time making a living and to spend far more time creating a life.',
		author: 'Robin Sharma',
		source: 'The Monk who sold his Ferrari',
	},
	{
		quote:
			'When you’re inspired by some extraordinary project, all of your thoughts break their bonds: your mind transcends limitations, your consciousness expands in every direction and you find yourself in a new, great and wonderful world. Dormant forces, faculties and talents become alive and you discover yourself to be a greater person than you ever dreamed yourself to be.',
		author: 'Robin Sharma',
		source: 'The Monk who sold his Ferrari',
	},
	{
		quote:
			'With one eye fixed on the destination, there is only one left to guide you along the journey.',
		author: 'Robin Sharma',
		source: 'The Monk who sold his Ferrari',
	},
	{
		quote:
			'The moment you concentrate the focus of your mind on a singular purpose, extraordinary gifts will appear within your life.',
		author: 'Robin Sharma',
		source: 'The Monk who sold his Ferrari',
	},
	{
		quote:
			'Find out what you truly love to do and then direct all of your energy towards doing it.',
		author: 'Robin Sharma',
		source: 'The Monk who sold his Ferrari',
	},
	{
		quote:
			'What really separates people who are habitually upbeat and optimistic from those who are consistently miserable is how the circumstances of life are interpreted and processed.',
		author: 'Robin Sharma',
		source: 'The Monk who sold his Ferrari',
	},
	{
		quote:
			'When you form the habit of searching for the positive in every circumstance, your life will move into its highest dimensions.',
		author: 'Robin Sharma',
		source: 'The Monk who sold his Ferrari',
	},
	{
		quote:
			'How can you really know the joy of being on the summit of the mountain unless you’ve first visited the lowest valley.',
		author: 'Robin Sharma',
		source: 'The Monk who sold his Ferrari',
	},
	{
		quote:
			'As a teenager I made mixtapes for crushes with no interest in my music taste. Now I do talks! Life, uh, finds a way.',
		author: 'Dan Abramov',
		source: 'Overreacted.io',
	},
	{
		quote:
			'Before you can optimize your app you should optimize your workflow, so you have more time to work on your app.',
		author: 'Dan Abramov',
	},
	{
		quote: 'Music, a magic beyond all we do here!',
		author: 'J. K. Rowling',
		source: 'Albus Dumbledore - Harry Potter',
	},
	{
		quote: 'To the well organised mind, death is but the next great adventure.',
		author: 'J. K. Rowling',
		source: 'Albus Dumbledore - Harry Potter',
	},
	{
		quote:
			'The trouble is, humans do have a knack of choosing precisely those things which are worst for them.',
		author: 'J. K. Rowling',
		source: 'Albus Dumbledore - Harry Potter',
	},
	{
		quote: 'The best of us must sometimes eat our words.',
		author: 'J. K. Rowling',
		source: 'Albus Dumbledore - Harry Potter',
	},
	{
		quote: 'It is our choices that show what we truly are, far more than our abilities.',
		author: 'J. K. Rowling',
		source: 'Albus Dumbledore - Harry Potter',
	},
	{
		quote:
			'You think the dead we’ve loved ever truly leave us? You think that we don’t recall them more clearly than ever in times of great trouble?… So you did see your father last night, you found him inside yourself.',
		author: 'J. K. Rowling',
		source: 'Albus Dumbledore - Harry Potter',
	},
	{
		quote: 'What you fear most of all is - fear.',
		author: 'J. K. Rowling',
		source: 'Remus Lupin - Harry Potter',
	},
	{
		quote:
			'If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.',
		author: 'J. K. Rowling',
		source: 'Sirius Black - Harry Potter',
	},
	{
		quote: 'We’re only as strong as we’re united, as weak as we’re divided.',
		author: 'J. K. Rowling',
		source: 'Albus Dumbledore - Harry Potter',
	},
	{
		quote: 'Greatness inspires envy, envy endangers spite, spite spawns lies.',
		author: 'J. K. Rowling',
		source: 'Lord Voldemort - Harry Potter',
	},
	{
		quote: 'Age is foolish and forgetful when it underestimates youth.',
		author: 'J. K. Rowling',
		source: 'Albus Dumbledore - Harry Potter',
	},
	{
		quote: 'It is the unknown we fear when we look upon death and darkness, nothing more.',
		author: 'J. K. Rowling',
		source: 'Albus Dumbledore - Harry Potter',
	},
	{
		quote: 'Those who are best suited to power are those who have never sought it.',
		author: 'J. K. Rowling',
		source: 'Albus Dumbledore - Harry Potter',
	},
	{
		quote: 'Sometimes costs are made to be borne.',
		author: 'J. K. Rowling',
		source: 'Severus Snape - Harry Potter',
	},
	{
		quote: 'Always.',
		author: 'J. K. Rowling',
		source: 'Severus Snape - Harry Potter',
	},
	{
		quote: 'People linked by destiny will always find each other',
		author: 'Andrzej Sapkowski',
		source: 'The Witcher',
	},
	{
		quote: 'I let my playing do the talking',
		author: 'Topias ‘Topson’ Taavitsainen',
		source: 'Against the Odds',
	},
	{
		quote:
			'Life is like a camera: just focus on what is important, capture good times, develop from negative, and if things do not work out, take another shot!',
		author: 'Daireth Winehouse',
	},
	{
		quote:
			'Think in terms of opportunities and solutions instead of problems, disappointment, and failure',
		author: 'Lorii Myers',
	},
	{
		quote: 'Do the best you can until you know better. Then when you know better, do better.',
		author: 'Maya Angelou',
	},
	{
		quote: 'Songwriting is a thing we can’t stop. It’s a habit, almost.',
		author: 'Paul McCartney',
	},
	{
		quote: 'Everything will be okay in the end. If it’s not okay, it’s not the end.',
		author: 'John Lennon',
	},
	{
		quote:
			'Your fears, your critics, your heroes, your villains: They are fictions you perceive as reality. Choose to see through them. Choose to let them go.',
		author: 'Isaac Lidsky',
	},
	{
		quote: 'It’s never been easier to start a company. It’s never been harder to build one.',
		author: 'Naval Ravikant',
	},
	{
		quote: 'You can beat 40 scholars with one fact, but you can’t beat one idiot with 40 facts.',
		author: 'Mevlana',
	},
	{
		quote:
			'Most people underestimate what they can do in a year, and overestimate what they can do in a day',
		author: 'Bill Gates',
	},
	{
		quote:
			'Don’t write to make money, write to build relationships with like minded people that you haven’t yet met.',
		author: 'Naval Ravikant',
	},
	{
		quote:
			'The meaning of life is just to be alive. It is so plain and so obvious and so simple. And yet, everybody rushes around in a great panic as if it were necessary to achieve something beyond themselves.',
		author: 'Alan Watts',
	},
	{
		quote: 'When I get sad, I stop being sad and be awesome instead.',
		author: 'Barney Stinson',
	},
	{
		quote: 'All we’re saying, is give peace a chance.',
		author: 'John Lennon',
	},
	{
		quote: 'No amount of indentation or sorting imports alphabetically can fix a broken design.',
		author: 'Dan Abramov',
	},
	{
		quote: 'Stop complaining. Start creating.',
		author: 'Dale Patridge',
	},
	{
		quote: 'Age is an issue of mind over matter. If you don’t mind, it doesn’t matter…',
		author: 'Mark Twain',
	},
	{
		quote:
			'Your goal in life is to find out the people who need you the most, to find out the business that needs you the most, to find the project and the art that needs you the most. There is something out there just for you.',
		author: 'Naval Ravikant',
	},
	{
		quote: 'Your closest friends are the ones you can have a relationship with about nothing.',
		author: 'Naval Ravikant',
	},
	{
		quote: 'I should call my parents when I think of them, should tell my friends when I love them',
		author: 'Evan Stephens Hall',
		source: 'Old Friends - Pinegrove',
	},
	{
		quote:
			'I wish there was a way to know you’re in the good old days, before you’ve actually left them.',
		author: 'Andy Bernard',
		source: 'The Office',
	},
	{
		quote: 'Extend beyond your preconceived limits!',
		author: 'Lorii Myers',
	},
	{
		quote: 'Everything is gonna come together and its gonna be beautiful',
		author: 'Sebastian ‘Ceb’ Debs',
		source: 'The International 2018 - before final game',
	},
	{
		quote:
			'At that point where you have decided to upgrade from aspiration to expectation and have begun to visualize an outcome, something incredibly important has happened, you have committed to the process of change.',
		author: 'Lorii Myers',
	},
	{
		quote:
			'It isn’t what you have, or who you are, or where you are, or what you are doing that makes you happy or unhappy. It is what you think about.',
		author: 'Dale Carnegie',
	},
	{
		quote: 'Do not be afraid to give up the good for the great.',
		author: 'Kenny Rogers',
	},
	{
		quote: 'Say yes to failure and pick the good thoughts.',
		author: 'Josh Radnor',
	},
	{
		quote:
			'Failure is guaranteed; 100% you’re gonna fail. It’s just a matter of can you string together those failures so that it turns into something called success.',
		author: 'Josh Radnor',
	},
	{
		quote: `You can't cling to the past, because no matter how hard you hold on, its already gone`,
		author: 'Ted Mosby',
		source: 'How I Met Your Mother',
	},
	{
		quote: 'Life can only be understood backwards; but it must be lived forwards.',
		author: 'Søren Kierkegaard',
	},
	{
		quote: 'Man is not made for defeat, a man can be destroyed but not defeated',
		author: 'Ernest Hemingway',
		source: 'The Old Man and the Sea',
	},
	{
		quote: 'You miss 100% of the shots you don’t take.',
		author: 'Wayne Gretzky',
		source: 'Michael Scott - The Office',
	},
	{
		quote:
			'Having a dream is always better than getting there, the journey itself is what makes it beautiful',
		author: 'Paul Davids',
	},
	{
		quote: 'Reading is faster than listening. Doing is faster than watching.',
		author: 'Naval Ravikant',
		source: 'How to Get Rich (Without Getting Lucky)',
	},
	{
		quote:
			'Become the best in the world at what you do. Keep redefining what you do until this is true.',
		author: 'Naval Ravikant',
		source: 'How to Get Rich (Without Getting Lucky)',
	},
	{
		quote:
			'If you make a mistake, try to do it twice and smile. That way people will think you meant it.',
		author: 'Eddie Van Halen',
		source: 'On life advice from his dad',
	},
	{
		quote:
			'Your life is a firefly blink in a night. You’re here for such a brief period of time. If you fully acknowledge the futility of what you’re doing, then I think it can bring great happiness and peace because you realize this is a game. But it’s a fun game.',
		author: 'Naval Ravikant',
	},
	{
		quote: 'If wisdom could be imparted through words alone, we’d all be done here.',
		author: 'Naval Ravikant',
	},
	{
		quote: 'Inspiration is perishable — act on it immediately.',
		author: 'Naval Ravikant',
	},
	{
		quote: 'The price of trying to make everyone else happy is making yourself miserable.',
		author: 'Naval Ravikant',
	},
	{
		quote: 'Life is to short to not try to keep getting better',
		author: 'Mark Tremonti',
	},
	{
		quote: `Rock 'n' Roll might not solve your problems, but it does let you dance all over them`,
		author: 'Pete Townshend',
	},
	{
		quote: `If you work like no one else right now, you'll be able to live like no one else in the future`,
		author: 'Aaron Benitez',
	},
	{
		quote: `Telling a programmer there's already a library to do X is like telling a songwriter there's already a song about love.`,
		author: 'Pete Cordell',
	},
	{
		quote: `If you're holding out for universal popularity, I'm afraid you will be in this fashion for a very long time`,
		author: 'J. K. Rowling',
		source: 'Albus Dumbledore - Harry Potter',
	},
	{
		quote: `Understanding is the first step to acceptance, and only with acceptance can there be recovery.`,
		author: 'J. K. Rowling',
		source: 'Albus Dumbledore - Harry Potter',
	},
	{
		quote: `It matters not what someone is born, but what they grow to be!`,
		author: 'J. K. Rowling',
		source: 'Albus Dumbledore - Harry Potter',
	},
	{
		quote: `The past is set, the future isn't.`,
		author: 'William and Jack Joyce',
		source: 'Quantum Break',
	},
	{
		quote: `What’s a master? I am surprised by Python all the time.`,
		author: 'Guido van Rossum',
	},
];

module.exports = quotes;
