let exampleNewsArticle = {
    id: "",
    title: "",
    article: ""
}
let NEWS = [
    {
        id: "07-21-24a",
        title: "July 21, 2024",
        article: `News articles are now JSON-based
        You can now link images, as well as little headers that are jump-to-able for use in campaigns etc
        Some style changes for mobile - let's see if they work well!
        *To Do:
        -Node App is now much higher priority. Most content is done.
        -Using the current JS scripts is OK, but using JSON files would be better, so that WorldBarrow can be swapped over to any universe's content. (probably using some sort of config file, then fetch...?)
        `
    },
    {
        id: "07-20-24a",
        title: "July 20, 2024",
        article: `The main search bar is added and fully functional!
        This is the only addition, along with an about/settings page.
        *To Do:
        Back buttons maybe
        Everything else`
    },
    {
        id: "07-12-24b",
        title: "July 12, 2024 (late night)",
        article: `All content page types are added. An NPC (a character with stats) can use the monster page I think.
        Added several articles (some characters, some items, a monster...)
        Added a way to make a list of all of the different articles, with both title and ID stored
        *To Do
        fix homepage, add search bar
        Make pages look better on phones (currently a bit small with the text on non-location pages)
        Make aforementioned Node stuff
        Ability to link images in body text
        Ability to link to different parts of the text (like from heading to heading, in a campaign)
        Possible custom font for the runes?`
    },
    {
        id: "07-12-24a",
        title: "July 12, 2024 (early morning)",
        article: `Monster pages now work :D
        I added the Guide Spirit as a base model. I plan to add the World Weaver in the future (later today)
        I added functionality so that dice notation (i.e. 1d6 or 1d8+10) is now replaced in most areas where it would be called for (where full markdown is permitted, and in certain statblock areas.) with a button that displays the die roll and the result. In a snazzy l'il popup too!
        I added this blog!
        Also added is Averia Serif Libre as a fun little font for where Lugrasimo don't work
        links all now use 'content' instead of 'location' OR 'content' as a selector, which changed some backend code.
        I added a more basic version of the markup Regex function to simply strip JSON of any potentially dangerous characters. With hope, this will make user-submitted stuff eventually viable.
        *To do
        Maybe make a little node/shell app to do this blogging thing
        Implement NPC, Character, Phenomena, item, and General Description page types in the "other" category
        The possibility of JSON import/export? Probably this would be mostly locally, but that would be nice. Just a little node/electron app for managing the content stuff.
        I considered Firebase integration, and in any case some chat/etc functionality would be nice in the longer run :D
        Oh yeah uh making the search bar search`
    }

]
