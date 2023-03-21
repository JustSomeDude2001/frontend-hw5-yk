<svelte:head>
	<title>Home</title>
	<meta name="Home" content="Home page" />
</svelte:head>

<bio>
    <h1>Yaroslav Kim</h1>
    <h2>Personal Webpage</h2>
    <p>My name is Yaroslav Kim. I am a student at the University of Innopolis. I am currently studying Computer Science. I am interested in programming, especially in game development.</p>
    <p>I am currently working as a gamedev curator for <a href="https://nti-center.ru/">National Technologies Institute</a> and</p>
    <p>Here are some of the project I have worked on:</p>
    <ul>
        <li><a href="https://justsomedude22.itch.io/offbeat-snowflake">"Offbeat Snowflake"</a></li>
        <li><a href="https://anlaut.itch.io/pixel-0">"Pixel-0"</a></li>
        <li><a href="https://anlaut.itch.io/ctg">"Capture the Geese"</a></li>
    </ul>
</bio>

<style>
	bio {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	h2 {
		font-weight: bold;
	}
</style>
