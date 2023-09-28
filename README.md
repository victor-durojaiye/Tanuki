Tanuki is a full-stack web application that utilizes Next.js, MongoDB, and GraphQL for flexible data retrieval, enabling Japanese learners to access and explore a curated repository of traditional Japanese folklore. Yandex.API and Kuromoji facilitate interactive vocabulary highlighting and user engagement while enabling advanced search filtering, creating a dynamic platform for active Japanese language learners."

Technologies: Next.js (TypeScript), GraphQL, Apollo Client, MongoDB, Framer, Yandex API, Kuromoji

Interactive Vocabulary Highlighting: Implemented a feature that allows users to click on specific words in the Japanese text to get instant translations and definitions. This helps learners build their vocabulary while reading.

Active approach:

Segmenting Text into Words: Libraries like kuromoji to tokenize Japanese text into words can possibly achieve this.

Defining Translation Mechanism: Yandex's translation API comes into play here.

Handle User Interaction: When a user interacts with a word (either hovers over or clicks), try triggering an event listener that fetches the translation using the API. The translation can be retrieved when the user interacts or in advance for a smoother experience.

Display Translation: Once the translation is retrieved, try displaying it in the tooltip or pop-up next to the word.

Advanced Search and Filtering: Implemented advanced search and filtering options so users can find stories based on their complexity, genre, time period, or language proficiency level.

User Interface: A user interface that includes input fields, dropdowns, checkboxes, or other UI elements for users to select their search criteria would be useful here.

Collect Search Criteria: Use JavaScript to collect the values selected by the user from the UI elements. You can do this using event listeners on the form elements.

Filtering Functionality: Implement a filtering mechanism that applies the selected criteria to the list of stories available. This could involve iterating through your list of stories and checking each story's attributes against the selected criteria.

Display Filtered Results: Display the filtered results on the page, either by updating the existing content or generating a new list of results based on the selected criteria.
