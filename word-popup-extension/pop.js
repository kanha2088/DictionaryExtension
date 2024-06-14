const words = document.getElementById("word-info");
const sound = document.getElementById("sound");

document.getElementById('searchButton').addEventListener('click', async function() {
    var word = document.getElementById('wordInput').value;
    console.log(word);
    
    var apiurl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    
    try {
        const response = await fetch(apiurl);
        const data = await response.json();
        console.log(data);
        
        // Find the first phonetic entry with a non-empty audio file
       
        // Initialize the word content
        let wordContent = `
            <div class="word-container">
                <div class="word-header">
                    <h3>${word}</h3>
                 
                </div>
                <div class="phonetic">
                    ${data[0].phonetic || ''}
                </div>
        `;

        // Loop through meanings and definitions
        if (data[0].meanings && data[0].meanings.length > 0) {
            data[0].meanings.forEach(meaning => {
                let partOfSpeech = meaning.partOfSpeech || "Fetching...";
                let definition = meaning.definitions && meaning.definitions[0] ? meaning.definitions[0].definition : "Fetching...";
                let example = meaning.definitions && meaning.definitions[0] ? meaning.definitions[0].example : "Fetching...";

                wordContent += `
                    <div class="word-details">
                        <h4>Speech: ${partOfSpeech}</h4>
                        <p><strong>Def:</strong> ${definition}</p>
                        <p><strong>Example:</strong> ${example}</p>
                    </div>
                `;
            });
        }

        // Close the word content div
        wordContent += '</div>';

        // Set the word content
        words.innerHTML = wordContent;

        // Set the audio source
        

    } catch (error) {
        console.error(error);
    }
});

