import React from "react";
import SourceCodeShard from "@fa-repo/shard-docs/dist/shards/code-shard";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import ShowcaseShard from "@fa-repo/shard-docs/dist/shards/showcase-shard";
import "@fa-repo/shard-docs/dist/shards/showcase-shard.css";
import SectionShard from "@fa-repo/shard-docs/dist/shards/section-shard";
import "@fa-repo/shard-docs/dist/shards/section-shard.css";
import ExampleShard from "@fa-repo/shard-docs/dist/shards/example-shard";
import "@fa-repo/shard-docs/dist/shards/example-shard.css";

/**
 * SourceCodeShard
 */

export default [
  <SectionShard title="Import" persistState="23344">
    <SourceCodeShard
      lang="bash"
      code={`
import SourceCodeShard from "@fa-repo/shard-docs/dist/shards/source-code-shard";
import "@fa-repo/shard-docs/dist/shards/source-code-shard.css";`}
    />
  </SectionShard>,
  <SectionShard title="Properties" persistState="55678">
    <MarkdownShard
      markdown={`
| Name          | Type    | Default   | Required  | Description                 |
|---------------|---------|-----------|-----------|-----------------------------|
| \`lang\`      | string | \`undefined\`    | Required  | Language parser: \`bash\`, \`css\`, \`html\`, \`http\`, \`javascript\`, \`js\`, \`json\`, \`jsx\`,  \`markdown\`, \`mathml\`, \`md\`, \`php\`, \`regex\`, \`sass\`, \`scss\`, \`shell\`, \`sql\`, \`svg\`, \`ts\`, \`tsx\`, \`typescript\`, \`xml\`, \`yaml\`, \`yml\`. |
| \`code\`      | string | \`""\`    | Required   | Code to present. |`}
    />
  </SectionShard>,
  <SectionShard title="Usage" persistState="55678">
    <ExampleShard
      title="Hello world"
      lang="jsx"
      sourceCode={`<SourceCodeShard
      lang="markdown"
      code={\`
# Aquarum inrita

## Ixione antro aurea

Lorem markdownum summo arboribus nostro illi, et ante nemorosam! Aesacon donec.
Veneris anne Polyxena mihi sed celebrabant promissa Deianira morte repente sinit
quantum. Fugae ne in herbas quodque exhausta aspicite gemellam inpediique ante
nexis et, quae dixit. Ausonio eripere, rapidae primis ut tradere gloria.

1. Ipsi vel
2. Prohibebant veniente
3. Quondam quae utrumque cessere mugiat miserabile undis

## Patientia sollicita nomen concipiunt oraque

Vulnera matrem barbae agimus verbaque vocis in ipsoque artus crudelis populumque
ut talia tendit movere tulit, tantum peremit sinit? Corripitur totidem
moderamine sacros Hyperione tela: sontem levatus. **Stella quin** Olympus
dicere. Claviger festumque quidem nocebant violentus veteris Arcades illa canis
cuncta illa timide sentit artus prius.

- Ascalaphus prima acervos
- O quondam
- Omne Nedymnum figurae caligine
- Et prosit
- Virgine cum gelidum mihi tum omnia pugnabant
- Petam tenuere rata steterant culmen quaeque fugaeque

## Urguet natae

Et fame, nata onus quoque ante Inachidos iacerent expers manus causam inter
circuitu eripiunt, sonumque formosa reppulerint. Nomine fugienti sum *abit
cognovit* essent concipe iungimus me guttas bracchia *nec*, Iunone quos signatur
iunctim armis corpora; palpitat. Tum teneras sed unus, annis genitor, ille
dilapsum *primum quod* collesque et cura quatiens. Diversorum hasta baculumque
caput sua ille neque mille moribundo huic dedit barbarus.\`}
/>`}
    >
      <SourceCodeShard
        lang="markdown"
        code={`
# Aquarum inrita

## Ixione antro aurea

Lorem markdownum summo arboribus nostro illi, et ante nemorosam! Aesacon donec.
Veneris anne Polyxena mihi sed celebrabant promissa Deianira morte repente sinit
quantum. Fugae ne in herbas quodque exhausta aspicite gemellam inpediique ante
nexis et, quae dixit. Ausonio eripere, rapidae primis ut tradere gloria.

1. Ipsi vel
2. Prohibebant veniente
3. Quondam quae utrumque cessere mugiat miserabile undis

## Patientia sollicita nomen concipiunt oraque

Vulnera matrem barbae agimus verbaque vocis in ipsoque artus crudelis populumque
ut talia tendit movere tulit, tantum peremit sinit? Corripitur totidem
moderamine sacros Hyperione tela: sontem levatus. **Stella quin** Olympus
dicere. Claviger festumque quidem nocebant violentus veteris Arcades illa canis
cuncta illa timide sentit artus prius.

- Ascalaphus prima acervos
- O quondam
- Omne Nedymnum figurae caligine
- Et prosit
- Virgine cum gelidum mihi tum omnia pugnabant
- Petam tenuere rata steterant culmen quaeque fugaeque

## Urguet natae

Et fame, nata onus quoque ante Inachidos iacerent expers manus causam inter
circuitu eripiunt, sonumque formosa reppulerint. Nomine fugienti sum *abit
cognovit* essent concipe iungimus me guttas bracchia *nec*, Iunone quos signatur
iunctim armis corpora; palpitat. Tum teneras sed unus, annis genitor, ille
dilapsum *primum quod* collesque et cura quatiens. Diversorum hasta baculumque
caput sua ille neque mille moribundo huic dedit barbarus.
`}
      />
    </ExampleShard>
  </SectionShard>
];
