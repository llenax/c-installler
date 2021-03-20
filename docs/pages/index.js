import Head from "next/head";

export default function Home() {
  const code =
    "\
const Discord = require('discord.js')\n\n\
const client = new Discord.Client({ intents: Discord.Intents.ALL });\n\n\
const cInstaller = require('c-installer');\n\n\
const ci = new cInstaller.Client({ client });\n\n\
ci.discord.load(function ping(req){\n\
  const { msg } = req;\n\
  return msg.channel.send('pong!')\n\
})";
  return (
    <>
      <Head>
        <title>C-Installer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav>
        <ul>
          <li className="list-logo">C-INSTALLER</li>
          <div className="right">
            <li className="list-item">Github</li>
            <li className="list-item">Twitter</li>
            <li className="list-item">Discord</li>
            <li className="list-item">NPM</li>
          </div>
        </ul>
      </nav>
      <main>
        <div className="markdown">
          <h1>this is just for test</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fermentum massa vel dui pharetra, hendrerit pharetra est finibus.
            Maecenas sodales lorem risus, nec porta velit malesuada sed. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in urna
            semper, commodo.
          </p>
          <h2>SomeOther</h2>
          <pre className="discord-md">
            <code className="language-js">{code}</code>
          </pre>
          <ol>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tempus velit eu posuere ultrices. In dapibus est ut mauris porta,
              nec ultricies arcu imperdiet. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Quisque eget
              felis gravida, sollicitudin tellus at, cursus orci. Fusce odio
              eros, elementum ac mauris eu, consequat porttitor erat. Fusce
              dapibus finibus velit, et facilisis mauris suscipit quis.
              Vestibulum dui dolor, lacinia bibendum lectus non, interdum
              molestie lorem. In faucibus euismod tortor, in sodales sem
              molestie dictum. Curabitur consequat purus nec placerat convallis.
              Sed congue rhoncus eros, sed pharetra orci bibendum et. Cras
              tortor est, pulvinar at rhoncus vel, fermentum a nibh. Suspendisse
              vitae lacinia elit, eget gravida urna. Donec pretium felis quis
              tempor sagittis. Sed vehicula fringilla lorem eu sodales. Integer
              dapibus tortor elit, quis tristique neque fringilla nec. In
              hendrerit arcu lectus, ac luctus mauris tempor et. Suspendisse
              aliquet suscipit lectus at ornare. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Aliquam auctor placerat euismod.
              Aenean eleifend, eros eu tincidunt varius, massa nisi dignissim
              risus, eu porttitor purus lectus non mi. Nunc facilisis sapien
              eget purus pellentesque, et congue urna blandit. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere.
            </li>
          </ol>
          <pre className="discord-md">
            <code className="language-js">{code}</code>
          </pre>
          <ol>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tempus velit eu posuere ultrices. In dapibus est ut mauris porta,
              nec ultricies arcu imperdiet. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Quisque eget
              felis gravida, sollicitudin tellus at, cursus orci. Fusce odio
              eros, elementum ac mauris eu, consequat porttitor erat. Fusce
              dapibus finibus velit, et facilisis mauris suscipit quis.
              Vestibulum dui dolor, lacinia bibendum lectus non, interdum
              molestie lorem. In faucibus euismod tortor, in sodales sem
            </li>
            <li>
              molestie dictum. Curabitur consequat purus nec placerat convallis.
              Sed congue rhoncus eros, sed pharetra orci bibendum et. Cras
              tortor est, pulvinar at rhoncus vel, fermentum a nibh. Suspendisse
              vitae lacinia elit, eget gravida urna. Donec pretium felis quis
              tempor sagittis. Sed vehicula fringilla lorem eu sodales. Integer
              dapibus tortor elit, quis tristique neque fringilla nec. In
              hendrerit arcu lectus, ac luctus mauris tempor et. Suspendisse
              aliquet suscipit lectus at ornare. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Aliquam auctor placerat euismod.
              Aenean eleifend, eros eu tincidunt varius, massa nisi dignissim
              risus, eu porttitor purus lectus non mi. Nunc facilisis sapien
              eget purus pellentesque, et congue urna blandit. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere.
            </li>
          </ol>
          <pre className="discord-md">
            <code className="language-js">{code}</code>
          </pre>
          <ol>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tempus velit eu posuere ultrices. In dapibus est ut mauris porta,
              nec ultricies arcu imperdiet. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Quisque eget
              felis gravida, sollicitudin tellus at, cursus orci. Fusce odio
              eros, elementum ac mauris eu, consequat porttitor erat. Fusce
              dapibus finibus velit, et facilisis mauris suscipit quis.
              Vestibulum dui dolor, lacinia bibendum lectus non, interdum
              molestie lorem. In faucibus euismod tortor, in sodales sem
              molestie dictum. Curabitur consequat purus nec placerat convallis.
              Sed congue rhoncus eros, sed pharetra orci bibendum et. Cras
              tortor est, pulvinar at rhoncus vel, fermentum a nibh. Suspendisse
              vitae lacinia elit, eget gravida urna. Donec pretium felis quis
              tempor sagittis. Sed vehicula fringilla lorem eu sodales. Integer
              dapibus tortor elit, quis tristique neque fringilla nec. In
              hendrerit arcu lectus, ac luctus mauris tempor et. Suspendisse
              aliquet suscipit lectus at ornare. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Aliquam auctor placerat euismod.
              Aenean eleifend, eros eu tincidunt varius, massa nisi dignissim
              risus, eu porttitor purus lectus non mi. Nunc facilisis sapien
              eget purus pellentesque, et congue urna blandit. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere.
            </li>
          </ol>
        </div>
      </main>
    </>
  );
}
