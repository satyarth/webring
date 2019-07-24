'use strict'

// Don't forget the comma! No trailing slashes
// protocol://url.domain.ext

const sites = [
  { url: 'https://wiki.xxiivv.com', title: 'xxiivv', type: 'wiki', author: 'neauoire', contact: 'aliceffekt@gmail.com', rss: 'https://wiki.xxiivv.com/links/rss.xml', feed: 'https://wiki.xxiivv.com/twtxt.txt', feed: 'https://wiki.xxiivv.com/twtxt.txt', glossary: 'https://wiki.xxiivv.com/scripts/database/glossary.ndtl' },
  { url: 'http://estevancarlos.com' },
  { url: 'https://electro.pizza', title: 'electro pizza', type: 'blog', author: 'rho', rss: 'https://electro.pizza/feed.xml', feed: 'https://electro.pizza/twtxt.txt' },
  { url: 'https://ianjbattaglia.co' },
  { url: 'https://avanier.now.sh', title: 'Arachne', type: 'wiki', author: 'joshavanier', contact: 'joshavanier@protonmail.com' },
  { url: 'http://kaemura.com', title: 'kaemura.com', type: 'blog', author: 'kaemura', contact: 'chimera1190@gmail.com', feed: 'https://kaemura.com/twttxt.txt' },
  { url: 'https://liamcooke.com' },
  { url: 'https://electricgecko.de' },
  { url: 'https://wichniow.ski' },
  { url: 'https://hraew.autophagy.io' },
  { url: 'http://evenunto.net' },
  { url: 'https://anxl.faith' },
  { url: 'https://xvw.github.io', title: 'xvw.github.io', type: 'blog', author: 'xvw', contact: 'xaviervdw@gmail.com', rss: 'https://xvw.github.io/atom.xml' },
  { url: 'https://heracl.es' },
  { url: 'https://felipecortez.net' },
  { url: 'http://luminghao.com' },
  { url: 'https://turelio.github.io' },
  { url: 'https://spaceshipsin.space', title: 'spaceshipsin.space', type: 'hybrid', author: 'gaeel', contact: 'gaeel@spaceshipsin.space', feed: 'https://spaceshipsin.space/twtxts/hallway.txt' },
  { url: 'https://log.lectronice.com', title: 'lectrolog.', type: 'blog', author: 'lectronice', contact: 'i.love.spam@lectronice.com', feed: 'https://lectronice.com/hallway/twtxt.txt' },
  { url: 'https://craze.co.uk' },
  { url: 'https://shaneckel.com' },
  { url: 'https://cblgh.org', title: 'cblgh.org', author: 'cblgh', contact: 'cabal://cblgh.org', feed: 'https://cblgh.org/twtxt.txt' },
  { url: 'https://ellugar.co', title: 'ellugar', type: 'wiki', author: 'afk', contact: 'afk@ellugar.co', rss: 'http://feeds.ellugar.co/ellugar-logs' },
  { url: 'http://hur.bet' },
  { url: 'http://chigby.org' },
  { url: 'https://longest.voyage' },
  { url: 'https://palomakop.tv' },
  { url: 'https://travisshears.com' },
  { url: 'https://v-os.ca' },
  { url: 'https://jmandel.xyz' },
  { url: 'https://systems.ws' },
  { url: 'https://jamesin.space' },
  { url: 'https://nathanwentworth.co' },
  { url: 'https://uonai.space' },
  { url: 'http://controls.ee' },
  { url: 'https://wasin.io' },
  { url: 'https://inns.studio' },
  { url: 'http://kokorobot.ca' },
  { url: 'https://ameyama.com', title: 'ameyama', type: 'blog', author: 'jrc03c', contact: 'josh@ameyama.com', rss: 'https://ameyama.com/blog/rss.xml' },
  { url: 'https://wake.st', title: 'wake.st', author: 'wakest', contact: '@liaizon@wake.st', feed: 'https://wake.st/twtxt.txt' },
  { url: 'https://xarene.la' },
  { url: 'https://alex.zyzhang.me' },
  { url: 'http://bildwissenschaft.vortok.info' },
  { url: 'https://jakofranko.github.com' },
  { url: 'https://aeriform.io' },
  { url: 'http://blog.lucasdidthis.com' },
  { url: 'http://npisanti.com', title: 'npisanti.com', author: 'npisanti', contact: 'nicola@npisanti.com', rss: 'http://npisanti.com/journal/rss.xml' },
  { url: 'https://underscorediscovery.ca' },
  { url: 'https://drisc.io', title: 'drisc.io', type: 'wiki', author: 'drisc', contact: 'cory@drisc.io', feed: 'https://drisc.io/hallway/twtxt.txt' },
  { url: 'https://neufv.systems', author: 'neufv' },
  { url: 'https://ricky.codes' },
  { url: 'https://maxdeviant.com' },
  { url: 'https://tynandebold.com' },
  { url: 'http://gytis.co' },
  { url: 'https://nomand.co' },
  { url: 'http://memoriata.com' },
  { url: 'https://mmm.s-ol.nu' },
  { url: 'https://chad.is' },
  { url: 'https://smidgeo.com/bots' },
  { url: 'https://iko.soy' },
  { url: 'http://atelieroilandsugar.com' },
  { url: 'https://magoz.is' },
  { url: 'https://szymonkaliski.com', author: 'Szymon Kaliski', type: 'hybrid', rss: 'https://szymonkaliski.com/feed.xml' },
  { url: 'https://phse.net', title: 'phse.net', type: 'blog', author: 'setphen', rss: 'https://phse.net/post/index.xml', feed: 'https://phse.net/twtxt/merv.txt' },
  { url: 'https://rosano.ca' },
  { url: 'https://soyboysky.github.io' },
  { url: 'https://gndclouds.cc' },
  { url: 'https://xuv.be' },
  { url: 'https://dsdshcym.github.io' },
  { url: 'https://wiki.chronica.xyz', title: 'chronica', type: 'wiki', author: 'ckipp', contact: 'ckipp@pm.me', feed: 'https://chronica.xyz/hallway.txt' },
  { url: 'https://boffosocko.com' },
  { url: 'https://hex22.org', title: 'hex22', author: 'kodedninja', contact: 'karamanhunor@pm.me', feed: 'https://t.seed.hex22.org/twtxt.txt' },
  { url: 'https://patrikarvidsson.com' },
  { url: 'https://sophieleetmaa.com' },
  { url: 'https://xinniw.github.io' },
  { url: 'https://mboxed.github.io/forida' },
  { url: 'https://letters.vexingworkshop.com' },
  { url: 'https://tom.org.nz/about' },
  { url: 'https://teknari.com' },
  { url: 'https://colectivo-de-livecoders.gitlab.io', title: 'Colectivo de Livecoders', type: 'blog', author: 'clic', contact: 'https://t.me/clic_laplata' },
  { url: 'https://www.madewithtea.com', title: 'madewithtea.com', type: 'blog' },
  { url: 'https://amorris.ca', title: 'amorris', author: 'amorris', type: 'blog', feed: 'https://feed.amorris.ca/hallway.txt' },
  { url: 'http://www.miha-co.ca', title: 'miha-co', type: 'Portfolio' },
  { url: 'https://buzzert.net', title: 'buzzert.net', author: 'buzzert', type: 'blog' },
  { url: 'https://notes.stuartpb.com/', title: 'notes.stuartpb.com', type: 'wiki', author: 'stuartpb', contact: 's@stuartpb.com', feed: 'https://twtxt.stuartpb.com/xxiivv.txt' },
  { url: 'http://xxiii.co', title: 'xxiii', type: 'portfolio', author: 'serocell', contact: 'psignal@s900.net', rss: 'http://serocell.com/feeds/serocell.xml', feed: 'http://xxiii.co/twtxt.txt' },
  { url: 'https://kor.nz', title: 'kor', type: 'wiki', author: 'kormyen', contact: 'h@kor.nz', feed: 'https://kor.nz/twtxt.txt' },
  { url: 'https://lublin.se', author: 'quite', contact: 'quite@hack.org', feed: 'https://lublin.se/twtxt.txt' },
  { url: 'https://zanneth.com', title: 'zanneth.com', author: 'zanneth', type: 'blog', contact: 'root@zanneth.com' }
]
