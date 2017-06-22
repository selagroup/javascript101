/////////////////////////////
// CODING CHALLENGE
/*
    1. Dates - write a function that accepts 2 data objects and returns the difference in milliseconds betweem them.
        1.2 use this function and display the diff in days.
    2. Array & Strings - write a function that accepts a string and returns the a word count object contaning every unique word in the text and the number of times it appeared in the text.
        2.2 use only array built-in methods.
        2.3 your not allowed to use any type of for/while loops.
*/
function dateDiff(startDate,endDate){

    return (startDate.getTime() - endDate.getTime())/1000;
}

console.log(dateDiff(new Date(),new Date('4/5/2016')));
console.log( Math.floor(dateDiff(new Date(),new Date('5/30/2017'))/ (60*60*24)) );


function wordCount(txt){
    
    return txt.split(' ')
        .filter((word) => (word.length !== '' || word !== '\n'))
        .reduce((acc,item)=>{
            if(!acc[item]){
                acc[item] = 1 
            }
            else{
                acc[item] +=1;
            }

            return acc;
        },{})
}

let text = `
    Once upon a time there lived in a certain village a little country girl, the prettiest creature who was ever seen. Her mother was excessively fond of her; and her grandmother doted on her still more. This good woman had a little red riding hood made for her. It suited the girl so extremely well that everybody called her Little Red Riding Hood.
One day her mother, having made some cakes, said to her, "Go, my dear, and see how your grandmother is doing, for I hear she has been very ill. Take her a cake, and this little pot of butter."

Little Red Riding Hood set out immediately to go to her grandmother, who lived in another village.

As she was going through the wood, she met with a wolf, who had a very great mind to eat her up, but he dared not, because of some woodcutters working nearby in the forest. He asked her where she was going. The poor child, who did not know that it was dangerous to stay and talk to a wolf, said to him, "I am going to see my grandmother and carry her a cake and a little pot of butter from my mother."

"Does she live far off?" said the wolf

"Oh I say," answered Little Red Riding Hood; "it is beyond that mill you see there, at the first house in the village."

"Well," said the wolf, "and I'll go and see her too. I'll go this way and go you that, and we shall see who will be there first."

The wolf ran as fast as he could, taking the shortest path, and the little girl took a roundabout way, entertaining herself by gathering nuts, running after butterflies, and gathering bouquets of little flowers. It was not long before the wolf arrived at the old woman's house. He knocked at the door: tap, tap.

"Who's there?"

"Your grandchild, Little Red Riding Hood," replied the wolf, counterfeiting her voice; "who has brought you a cake and a little pot of butter sent you by mother."

The good grandmother, who was in bed, because she was somewhat ill, cried out, "Pull the bobbin, and the latch will go up."

The wolf pulled the bobbin, and the door opened, and then he immediately fell upon the good woman and ate her up in a moment, for it been more than three days since he had eaten. He then shut the door and got into the grandmother's bed, expecting Little Red Riding Hood, who came some time afterwards and knocked at the door: tap, tap.

"Who's there?"

Little Red Riding Hood, hearing the big voice of the wolf, was at first afraid; but believing her grandmother had a cold and was hoarse, answered, "It is your grandchild Little Red Riding Hood, who has brought you a cake and a little pot of butter mother sends you."

The wolf cried out to her, softening his voice as much as he could, "Pull the bobbin, and the latch will go up."

Little Red Riding Hood pulled the bobbin, and the door opened.

The wolf, seeing her come in, said to her, hiding himself under the bedclothes, "Put the cake and the little pot of butter upon the stool, and come get into bed with me."

Little Red Riding Hood took off her clothes and got into bed. She was greatly amazed to see how her grandmother looked in her nightclothes, and said to her, "Grandmother, what big arms you have!"
"All the better to hug you with, my dear."
"Grandmother, what big legs you have!"
"All the better to run with, my child."
"Grandmother, what big ears you have!"
"All the better to hear with, my child."
"Grandmother, what big eyes you have!"
"All the better to see with, my child."
"Grandmother, what big teeth you have got!"
"All the better to eat you up with."
And, saying these words, this wicked wolf fell upon Little Red Riding Hood, and ate her all up.
`

console.log(wordCount(text));