var questions = [
    ('What is the name of the horse-like animal with black and white stripes?', 'zebra', 93.3),
    ('What is the name of the long sleep some animals go through during the entire winter?', 'hibernation', 89.0),
    ('What is the name of the rubber object that is hit back and forth by hocky players?', 'puck', 88.8),
    ('What is the name of the remains of plants and animals that are found in stone?', 'fossils', 87.3),
    ('What precious gem is red?', 'ruby', 84.9),
    ('What is the name of the severe headace that returns periodcally and often is accompanied by nausea?', 'migraine', 84.7),
    ('What is the name of author who wrote "Romeo and Juliet"?', 'Shakespeare', 84.4),
    ('What is the name of a dried grape', 'Raisin', 83.5),
    ('What is the name of the comic strip character who eats spinach to increase his strength', 'popeye', 82.4),
    ('What animal runs the fastest?', 'cheetah', 81.6),
    ('What is the name of the process by which plants make their food?', 'photosynthesis', 80.0),
    ("What is the name of Dorthy's dog in 'The Wizard of OZ'?", 'toto', 79.9),
    ('What is the name of the molten rock that runs down the side of a volcano during an eruption?', 'lava', 79.3),
    ('What was the name of supposedly unsinkable ship that sank on its maiden voyage in 1912', 'titanic', 78.9),
    ('Which sport uses the terms "gutter" and "alley"?', 'bowling', 78.4),
    ('What is the name of a giant ocean wave caused by an earthquake?', 'tsunami', 78.4),
    ("What is the term for hitting a volleyball down hard into the opponenet's court", 'spike', 78.1),
    ('What is the last name of the villainous captain in the story "Peter Pan"?', 'hook', 78.1),
    ("What was the name of tarzan's girlfriend?", 'jane', 78.0),
    ('What is the last name of the brothers who flew the first airplane at kitty hawk?', 'wright', 75.1),
    ('What is the name for a medical doctor who specializes in cutting the body?', 'Surgeon', 74.8),
    ('What is the lasst nmae of the first person to set foot on the moon?', 'Armstrong', 74.1),
    ('What is the capital of france', 'paris', 73.0),
    ('What is the name of the crime in which a building or property is purposely set on fire?', 'arson', 72.2),
    ('What is the name of the short pleated skirt worn by men in Scotland?', 'Kilt', 71.7),
    ('What is the name of an inability to sleep?', 'insomnia', 71.4),
    ('What is the name for a medical doctor who specializes in disease of the skin?', 'Dermatologist', 69.2),
    ('What is the name of the largest ocean on Earth?', 'Pacific', 68.5),
    ('What is the name of the ship that carried the Pilgrims to America in 1620', 'Mayflower', 66.3),
    ('What is the name for a cyclone that occurs over land?', 'Tornado', 64.1),
    ('Which sport is associated with Wimbledon?', 'tennis', 61.9),
    ('What is the name of the bird that cannot fly and is the largest bird on Earth?', 'Ostrich', 60.3),
    ('What is the name of the island-city belived since antiquity to have sunk into the ocean?', 'Atlantis', 59.3),
    ('What is the name of the lizard that changes its color to match the surroundings?', 'Chameleon', 58.9),
    ('What is the name of the thick layer of fat on a whale?', 'blubber', 57.2),
    ('What is the last name of the baseball player who had the most home runs in a single season prior to 1961?', 'Ruth', 56.8),
    ('What is the name of a young sheep?', 'Lamb', 56.1),
    ('What is the largest planet in the solar system?', 'Jupiter', 55.9),
    ('What is the name of the navigation instrument used at sea to plot position relative to the magnetic North Pole?', 'Compass', 52.3),
    ('What is the term in golf refering to a score of one under par on a particular hole?', 'Birdie', 52.3),
    ('Which game uses a rubber ball and little metal pieces?', 'Jacks', 52.1),
    ('What is the name of a dried plum', 'Prune', 51.7),
    ('In which sport does a rider on horseback hit a ball with his mallet?', 'Polo', 51.0),
    ('What is the name of the legendary one-eyed giant in greek mythology?', 'Cyclops', 50.7),
    ('In what park is "Old Faithful" located?', 'Yellowstone', 49.1),
    ('What is the name of the poker hand in which all cards are of the same suit?', 'Flush', 48.6),
    ('In which sport is the Stanley Cup awarded', 'Hockey', 48.1),
    ('What is the name of the chapel whose ceiling was painted by Michelangelo?', 'Sistine', 47.5),
    ('Of which country is Baghdad the captial?', 'Iraq', 46.8),
    ('What is the name of the liquid protion of whole blood?', 'Plasma', 46.8),
    ('What is the name of the city in Italy that is known for its canals?', 'Venice', 45.9),
    ('What is the name of the spear like object that is thrown during a track meet?', 'Javelin', 45.2),
    ('What is the last name of the man who rode horseback in 1775 to war that the british were coming?', 'Revere', 44.3),
    ('Who was the Egyption queen who joined forces with Mark Antony of Rome?', 'Cleopatra', 44.3),
    ('What is the last name of the man who assassinated Abraham Lincoln', 'Booth', 43.8),
    ('What is the last name of the man who showed that lightning is electric?', 'Franklin', 43.7),
    ('What is the last name of the famous magician and escape artist who died of appendictis?', 'Houdini', 43.6),
    ('What is the name of deer meat?', 'Venison', 43.2),
    ('What is the name of the large hairy spider that lives near bananas?', 'Tarantula', 42.9),
    ('What is the name of the ocean that is located between Africa and Australia?', 'Indian', 42.7),
    ('What is the last name of the singer who recorded "Heartbreak Hotel" and "All Shook up"?', 'Presley', 42.4),
    ('What is the name of the crime in which a person purposely betrays his country?', 'Treason', 41.8),
    ('What is the name of the first artificial satellite put in orbit by Russia in 1957?', 'Sputnik', 41.7),
    ('What brand of cigarette was first to have the flip-top box?', 'Marlboro', 39.9),
    ('What kind of metal is associated with a 50th wedding anniversary?', 'Gold', 39.6),
    ('Which type of snake do Asian snake-charmers use?', 'Cobra', 39.1),
    ('What is the only liquid metal at rome remperature', 'Mercury', 38.8),
    ('What is the name of the desert people who wander isntead of living in one place?', 'Nomads', 35.2),
    ('What is the capital of New York', 'Albany', 33.1),
    ('What is the name of the organ that produces insulin?', 'Pancreas', 32.7),
    ('What is the name of the collar bone?', 'Clavicle', 32.4),
    ('What is the name of the extinct reptiles known as "Terrible Lizards"', 'Dinosaurs', 31.5),
    ('What is the capital of Russia?', 'Moscow', 30.9),
    ('Which breed of cat has blue eyes?', 'Siamese', 30.8),
    ('What is the last name of the second U.S. president?', 'Adams', 30.3),
    ('What is the name of the constellation that looks like a flying horse?', 'Pegasus', 30.0),
    ('What is the kind of cat that spoke to Alice in the story "' + "Alice's Adventures in Wonderland" + '"', 'Cheshire', 30.0),
    ('What is the last name of the man who proposed the Theory of Relativity?', 'Einstein', 29.7),
    ('What was the last name of the woman who supposedly designed and sewed the first American flag?', 'Ross', 28.6),
    ('What is the last name fo the first signer of the "Declaration of Independence"?', 'Hancock', 28.5),
    ("What was the name of King Arthur's sword?", 'Excalibur', 28.5),
    ('What is the word that means a nautical mile per hour?', 'knot', 27.7),
    ("What is the name for the astronomical bodies that enter the Earth's atmosphere?", 'Meteors', 27.1),
    ('What is the longest river in South America?', 'Amazon', 26.7),
    ('What is the name of the automobile instrument that measures mileage?', 'Odometer', 25.8),
    ('What Italian city was destroyed when Mount Vesuvius erupted in 79 A.D.?', 'Pompeii', 25.8),
    ("What is the last name of Batman's secret identity in the Batman comics?", 'Wayne', 24.5),
    ('What is the last name of the mythical giant lumberjack?', 'Bunyan', 24.5),
    ('What is the name of the company that produces "Baby Ruth" candy bars?', 'Nestle', 24.5),
    ("What is the name of Socrates' most famous student?", 'Plato', 23.9),
    ('What is the name of the three-leaf clover that is the emblem of Ireland?', 'Shamrock', 23.9),
    ('Of which country is Buenos Aires the capital?', 'Argentina', 20.4),
    ('What is the last name of the actress who received the best actress award for the movie "Mary Poppins"?', 'Andrews', 19.8),
    ('What is the name of the mountain range in which Mount Everest is located?', 'Himalayas', 19.0),
    ('What is the unit of sound intensity?', 'Decibel', 18.8),
    ('What is the name of the project which developed the atomic bomb during World War II?', 'Manhattan', 18.7),
    ('What is the unit of electrical power that refers to a current of one ampere at one volt?', 'Watt', 18.5),
    ('What is the last name of the author of the book "1984"?', 'Orwell', 17.6),
    ('In which game are men crowned?', 'Checkers', 17.2),
    ('What is the last name of the man who assassinated president John F. Kennedy?', 'Oswald', 16.3),
    ("What is the name of Batman's butler", 'Alfred', 16.0),
    ('Which country was the first to use gunpowder?', 'China', 16.0),
    ('What is the name of an airplane without an engine?', 'Glider', 15.7),
    ('What is the name of the North Star?', 'Polaris', 15.6),
    ("What is the only word that The Raven says in Edgar Allen Poe's poem" + '"The Raven"?', 'Nevermore', 15.5),
    ('For which country is the yen the monetary unit?', 'Japan', 15.2),
    ('In what European city is the Parthenon located?', 'Athens', 15.0),
    ('What is the name of the furry animal that attacks cobra snakes?', 'Mongoose', 14.9),
    ('For which country is the Rupee the monetary unit?', 'India', 14.7),
    ('What is the last name of the man who first studied genetic innheritance in plants?', 'Mendel', 14.4),
    ('What is the last name of the man who wrote the "Star Spangled Banner"?', 'Key', 14.1),
    ('What is the name of the Palace in London in which the monarch of England resides?', 'Buckingham', 14.1),
    ('In which game are the standard pieces of staunton design', 'Chess', 13.8),
    ('What are people who make maps called?', 'Cartographers', 13.8),
    ('What was the name of the zeppelin that exploded in Lakehurst N.J. in 1937', 'Hindenburg', 13.4),
    ('What is the palace built in Franch by King Louis XIV', 'Versailles', 12.8),
    ('In which city is the U.S. Navel Academy located?', 'Annapolis', 12.7),
    ('What is the name of the lightest wood known?', 'Balsa', 12.5),
    ('What is the last name of the boxer who later became known as Muhammad Ali?', 'Clay', 11.7),
    ('What island is tha largest in the world excluding Australia?', 'Greenland', 11.1),
    ('What is the name of the small Japanese stove used for outdoor cooking?', 'Hibachi', 11.0),
    ('What is the last name of the woman who began the proffession of nursing?', 'Nightingale', 10.8),
    ('Who was the leader of the Argonauts?', 'Jason', 10.7),
    ('What is the last name of the artist who painted "Guernica"?', 'Picasso', 10.7),
    ('In what ancient city were the "Hanging Gardens" located?', 'Babylon', 10.3),
    ('What are people called who explore caves?', 'Spelunkers', 100),
    ('What is the name of the captian of The pequod in the book "Moby Dick"?', 'Ahab', 0.97),
    ('What is the captial of Kentucky?', 'Frankfort', 0.95),
    ('What is the name of an illegal move by a baseball pitcher that results in all runners advancing one base?', 'Balk', 0.93),
    ('What is the last name of the american who started in the 1936 Olympics?', 'Owens', 0.93),
    ('The deepest part of the ocean is located at which trench?', 'Mariana', 0.93),
    ('Which sport uses the terms "stones" and "brooms"?', 'Curling', 0.92),
    ('Waht is the proper name for a badmiton bird?', 'Shuttlecock', 0.91),
    ('What is the last name fo the author who wrote "Oliver twist"?', 'Dickens', 0.90),
    ('What is the capital of Delaware', 'Dover', 0.86),
    ('What is t the last name of the man who invented the phonograph?', 'Edison', 0.86),
    ('In which type of ski race does the downhill skier make sharp turns around poles?', 'Salom', 0.83),
    ('In which city is Heathrow airport located', 'London', 0.81),
    ('What is the capital of Jamaica?', 'Kingston', 0.80),
    ('Which planet was the last to be discoverd?', 'Neptune', 0.80),
    ('What is the last name of the author who wrote "the Murders in the Rue Morgue"?', 'Poe', 0.80),
    ('What is the name of the ship on which Charles Darwin made his scientific voyage?', 'Beagle', 0.79),
    ('What is the campital of chile?', 'Santiago', 0.77),
    ('What is the last name of the author who wrote "The Old Man and The Sea"?', 'Hemingway', 0.77),
    ('What is the last name of the man who wrote "Canterbury Tales"?', 'Chaucer', 0.76),
    ('What is the name of the fountain in rome into which coins are thrown for good luck?', 'Trevi', 0.71),
    ('What was the last name of the man who was president directly after James Madison?', 'Monroe', 0.68),
    ('What is the last name of the astronomer who published in 1543 his theory that the Earth revolves around the Sun?', 'Copernicus', 0.67),
    ('What is the last namae of the criminal who was knwon as "Scarface"?', 'Capone', 0.66),
    ("What is the name of The Lone Ranger's Indian sidekick?", 'Tonto', 0.61),
    ('What is the capital of Denmark?', 'Copenhagen', 0.59),
    ('What was the last namae of the man who was the radio broadcaster for the "War of the Worlds"?', 'Welles', 0.58),
    ("In which city is Michealangeo's statue of David located?", 'Florence', 0.58),
    ("What was Frank Lloyd Wright's Profession?", 'Achitect', 0.58),
    ('Of which country is Narobi the capital?', 'Kenya', 0.53),
    ('What is the name of the Hillbilly family that had a famous feud with the mccoy family?', 'Hatfield', 0.52),
    ('What kind of poison did Socrates take as his execution?', 'Hemlock', 0.52),
    ('What is the last name of the first person to complete a solo flight across the Atlantic ocean?', 'Lindbergh', 0.52),
    ('Andy Griffen was the sheriff of what town on televisions "Andy Griffith Show"', 'Mayberry', 0.52),
    ('What is the name of the Roman Emperor who fiddled while Rome burned?', 'Nero', 0.52),
    ('What is the city in which the baseball hall of fame located?', 'Cooperstown', 0.51),
    ('What is the name of the unit of measure that refers to a six-foot depth of water?', 'Fathom', 0.51),
    ('What is the last name of the scientist who discovered Radium?', 'Curie', 0.46),
    ('What is the last name of the author who wrote "Brave New World"?', 'huxley', 0.45),
    ('In addition to the Kentucky Derby and Belmont stakes, What horse race comprises the Triple Crown?', 'Peakness', 0.44),
    ('What is the last name of the criminal who was killed by FBI agents outside of a Chicago movie theater?', 'Dillinger', 0.44),
    ('What is the name of the singer who popularized a dance known as the "Twist"?', 'Checker', 0.44),
    ('Over which river is the George Washinton Bridge?', 'Hudson', 0.41),
    ('What is the last name of the man who invented dynamite?', 'Nobel', 0.40),
    ('What is the name of the Chinese religion founded by Lao Tse?', 'Taoism', 0.40),
    ('What is the last name of the commander who lost the Battle of The Little Bighorn river?', 'Custer', 0.38),
    ('What is the name of the navigation instrument used at sea to plot position by the stars?', 'Sextant', 0.38),
    ('Who was the most famous Greek Doctor?', 'Hippocrates', 0.37),
    ('In which city does the Cotton Bowl take place', 'Dallas', 0.37),
    ('What is the last name of the author who wrote The Sherlock Homes stories?', 'Doyle', 0.36),
    ('For which country is the Drachma the monetary unit?', 'Greece', 0.36),
    ("What is the name of the mansion in Virgina that was thomas JEfferson's home?", 'Monticello', 0.35),
    ('What is the longest river in Asia?', 'Yangtze', 0.35),
    ('What is the last name of the actor who received the best actor award for the movie "On the Waterfront"?', 'Brando', 0.34),
    ('What is the last name of the male star of the movie "Casablanca"?', 'Bogart', 0.34),
    ('Of Which country is Budapest the capital?', 'Hungary', 0.33),
    ('Who is known as "The Father of Geometry"?', 'Euclid', 0.33),
    ('What is the last name of the husband-wife spies who were electrocuted in 1951 for passing atomci secrets to Russia?', 'Rosenberg', 0.31),
    ('What is the last name of the composer who wrote the Opera "Don Giovanni"?', 'Mozart', 0.30),
    ('What is the last name of the author of the James Bond Novels?', 'Fleming', 0.30),
    ('What was the last name of Buffalo Bill?', 'Cody', 0.30),
    ('What is the last name of the author who wrote under the pseudonym of Mark Twain?', 'Clemens', 0.29),
    ('What is the name of the island on which Napoleon born?', 'Corsica', 0.29),
    ('What is the last name of the doctor who first developed a vaccine against Polio?', 'Salk', 0.28),
    ('What is the last name of the man who began the reformation in Germany?', 'Luther', 0.28),
    ('What is the capital of Finland?', 'Helsinki', 0.26),
    ('What was the name of the Apollo Lunar modual that landed the first man on the Moon?', 'Eagle', 0.25),
    ('What is the last name of the cosmonaut who was the first person to orbit around the Earth?', 'Gagarin', 0.24),
    ("What was the name of Roy Roger's Dog?", 'Bullet', 0.21),
    ("What was the name of Alexander Graham Bell's assistant?", 'Watson', 0.21),
    ('What was the last name of the composer of the "Maple Leaf Rag"?', 'Joplin', 0.21),
    ('What is the last name of the playwright who wrote "A Streetcar Named Desire"?', 'Williams', 0.20),
    ('What was the last name of the author of "Little Women"?', 'Alcott', 0.20),
    ('What was the last name of the first person to climb Mount Everest?', 'Hillary', 0.20),
    ('What is the last name of the actor who played Rhett Butler in "Gone with the Wind"?', 'Gable', 0.20),
    ('In Which country is Angel Falls located?', 'Venezuela', 0.20),
    ('What is the capital of Canada?', 'Ottowa', 0.19),
    ('What is the last name of the twenty-first U.S. President?', 'Arthur', 0.19),
    ('What was the name of the Goldfish in the story of Pinocchio?', 'Cleo', 0.19),
    ('What is the name of the villainous people who lived underground in H. G. Well' + "'s book " + '"The Time Machine"?', 'Morlocks', 0.18),
    ('What was the last name of the character portrayed by Robert Stack on the television show "The Untouchables"?', 'Ness', 0.15),
    ('What is the capital of Australia?', 'Canberra', 0.15),
    ('What is the last name of the artisit who painted "The Persistence of Memory"?', 'Dali', 0.15),
    ('What is the last name of the man who invented the telegraph?', 'Morse', 0.14),
    ('What is the name of the river on which Bonn is located?', 'Rhine', 0.14),
    ('What is the name of the substance derived from a whale that is used to make perfume?', 'Ambergris', 0.14),
    ("What is the name of the Submarine in Jules Verne's " + '"20,0.00 Leagues Beneath the sea"?', 'Nautilus', 0.10),
    ('What is the name of the Clown on the "Howdy Doody" television show?', 'Clarabell', 0.10),
    ("What is the last name of Dagwood's Boss in the comic strip " + '"Blondie"?', 'Dithers', 0.10),
    ('What is the last name of the movie actor who portayed Spartacus?', 'Douglas', 0.10),
    ('What is the last name of the woman who founded the American Red Cross?', 'Barton', 0.10),
    ('What is the last name of the Union General who defeated the Confederate army at the civil war battle of Gettysburg?', 'Meade', 0.10),
    ('What is the Avenue that immediately follows Atlantic Avenue in the game of Monopoly?', 'Ventnor', 0.10),
    ('What game uses a doubling cube?', 'Backgammon', 0.10),
    ('What is the last name of the man who supposedly killed jesse James?', 'Ford', 0.09),
    ('What is the last name of the European author who wrote "The Trial"?', 'Kafka', 0.08),
    ('The general named Hannibal was from what city?', 'Carthage', 0.07),
    ('What is the last name of the British Admiral who won the Battle of Trafalgar?', 'Nelson', 0.07),
    ('What is the name of t4he Indian college in Pennsylvania for which Jim Thorpe played football?', 'Carlisle', 0.07),
    ('What is the name oft he play in which Elwood P. Dowd is a character?', 'Harvey', 0.07),
    ('What famous knot did Alexander the Great undo?', 'Gordian', 0.07),
    ('What was the name of unsuccessful auto that manufactured by the Ford Motor Company from 1957-1959?', 'Edsel', 0.07),
    ('What is the last name of the song writer who wrote the song "I love Paris"?', 'Porter', 0.07),
    ('What is the last name of the first American author to win the Nobel prize for literature?', 'Lewis', 0.07),
    ('What is the last name of the inventor of the wireless radio?', 'Marconi', 0.07),
    ('What is the last name of the artist who painted "American Gothic"?', 'Wood', 0.07),
    ('In what profession was Emmett Kelly?', 'Clown', 0.06),
    ('What is the name of the river that runs through Rome?', 'Tiber', 0.06),
    ('What is the last name of the poet who originally wrote "Don Juan"?', 'Byron', 0.06),
    ('What is the last name of the French author who wrote "The Stranger"?', 'Camus', 0.05),
    ('Who was the first ruler of the Holy Roman Empire?', 'Charlemange', 0.05),
    ('What is the last name of the man who is regarded as the national poet of Scotland?', 'Burns', 0.05),
    ('What is the lat name of the football player known as "The Galloping Ghost"?', 'Grange', 0.05),
    ("What is the name of Roy Rogers' Horse?", 'Trigger', 0.05),
    ('What was the name of the nuclear subarine that was sunk in the Alantic in 1963?', 'Thresher', 0.05),
    ("What is the name of the man who removed the thorn from the Lion's paw in the story from Aesop's Fables?", 'Androcles', 0.05),
    ('What is the name oft he brightest star in the sky excluding the Sun?', 'Sirus', 0.05),
    ('What is the name of the land of the giants in "Gulliver' + "'s Travels" + '"?', 'Brobdingnag', 0.05),
    ('What was the last name of the female star of the movie "Casablanca"?', 'Bergman', 0.05),
    ('What is the last name of the actor known as "The Man of a Thousand Faces"?', 'Chaney', 0.05),
    ('What is the name of the Baseball player with the highest lifetime batting average in the Major Leagues?', 'Cobb', 0.05),
    ('What was the last name of the actor in the role of Perry Mason on television?', 'Burr', 0.04),
    ('What is the last name of the most popular pin-up gitrl of World War II?', 'Grable', 0.04),
    ('What is the name of the largest desert on Earth?', 'Antartica', 0.00),
    ('What is the last name of the Jocky with the most lifetime winners in horse racing?', 'Baze', 0.00),
    ('what is the last name of the man who was the voice of Mr. Magoo?', 'Backus', 0.00),
    ('What is the last name of the actor who portrayed Sergeant Friday on "Dragnet"?', 'Webb', 0.00),
    ('What was the last name of the actor who portrayed The Father on television show "Father Knows Best"?', 'Young', 000),
    ('What was the last name of the ventriloquist who provided the voice for Charlie McCarthy?', 'Bergen', 0.00),
    ('What was the last name of the captain of the British ship "Bounty" when the mutiny occurred?', 'Bergen', 0.00),
    ('What was the last name of the inventor of the steamboat "Clermont"?', 'Fulton', 0.00),
    ("What is the name of Germany's largest battleship that was sunk in World War II", 'Bismark', 0.00),
    ('What is the last name of the Judge who was known as the "The Law WEst of the Pecos"?', 'Bean', 0.00),
    ("What is John Kenneth Galbraith's profession?", 'Economist', 0.00),
    ('What was the name of the Union ironclad ship that fought the Confederate ironclad Merrimack?', 'Monitor', 0.00),
    ('What is the last name of the doctor who performed the first successful human heart transplant?', 'Barnard', 0.00),
    ('What is the last name of the man who said "I only regret that I have but onle life to lose for my country"?', 'Hale', 0.00),
    ('What is the last name of the pilot of the U-2 spy plane shot down over Russia in 1960?', 'Powers', 0.00),
    ('What is the last name of the actor who portrayed the Sheriff in the movie "High Noon"?', 'Cooper', 0.00),
    ('What is the name of the mountain range that seperates asia from europe?', 'Ural', 0.00),
    ('What is the last name of the boxer who was known as the "Manassa Mauler"?', 'Dempsey', 0.00),
    ('What is the last name of the man who created the comic strip "li' + "'l Abner" + '"?', 'Capp', 0.00),
    ('What is the last name of the baseball pitcher who pitched a perfect game in the 1956 World Series?', 'Larsen', 0.00),
    ('What is the last name of the first man to run the mile in under four minutes?', 'Bannister', 0.00),
    ('What is the last name of the ajuthor who wrote "Brothers Karamazov"?', 'Dostoyevski', 0.00),
    ('What is the name of th author who received a pulitzer prize for his writings about Abraham Lincoln', 'Sandburg', 0.00),
    ('What is the last nameof the man who created the comic strip "Woody woodpecker"?', 'Lantz', 0.00),
    ('What is the name of the instrument used to measure wind speed?', 'Anemometer', 0.00),
    ('What is the last name of the author of "Our Town"?', 'Wilder', 0.00),
    ('What is the last name of the singer who made a hit recording of the song "Who' + "'s Sorry Now" + '"?', 'Francis', 0.00),
    ('What is the last name of the Cuban leader that Castro overthrew?', 'Batista', 0.00),
    ('What is the name of the rubber roller on a type writer?', 'Platen', 0.00),
    ('What was the name of the largest Confederate Military Prison during the Civil War?', 'Andersonville', 0.00),
    ('What is the last name of the author of "The Agony and The Ecstasy"?', 'Stone', 0.00),
    ("What is the last name of Flash's Girlfriend in the comic strip" + ' "Flash Gordon"?', 'Arden', 0.00),
    ('What is the name of the first movie to receive the academy award for best picture?', 'Wings', 0.00),
    ('What it the last name of the discoverer of the vaccination for Smallpox"', 'Jenner', 0.00),
    ('What iss the last name of the boy in the book "Treasure Island"?', 'Hawkins', 0.00),
    ('What is the last name of the boxer who won the boxing title from John L. Sullivan?', 'Corbett', 0.00),
    ('What is the last name of the man who wrote the song "How deep is the Ocean"?', 'Berlin', 0.00),
    ('What is the last name of Billy the Kid?', 'Bonny', 0.00),
    ('What is the last name of the singer whose theme song was "When the blue of the night meets the gold of the day"?', 'Crosby', 0.00),
    ('From what musical is the song "Baubles Bangles and Beads"?', 'Kismet', 0.00),
    ('What was the last name of the actor who portrayed Dr. Watson in the Sherlock Holmes Series?', 'Bruce', 0.00),
    ('What is the last name of the man who was most responsible for photographing the U.S. Civil War?', 'Brady', 0.00),
    ('What is the name of a number two wood in golf?', 'Brassie', 0.00),
    ('What is the last name of the poet who wrote the line "Into each life a little rain must fall"?', 'Longellow', 0.00),
    ("What was the name of Gene Autry's Horse?", 'Champion', 0.00),
    ('What is the name of the town through which Lady Godiva supposedly made her famous rider?', 'Coventry', 0.00),
    ('What is the last name of the first woman to swim across the English Channel?', 'Ederle', 0.00),
    ('What is the last name of the first flier to fly solo around the world', 'Post', 0.00),
    ('What is the last name of the man who wrote the poem "it coundn' + "'t be done" + '"?', 'Guest', 0.00),
    ("Who was the racehorse of the year for many successive years in the 1960's?", 'Kelso', 0.00),
    ('What is the highest mountain in South America?', 'Aconcagua', 0.00)
];
