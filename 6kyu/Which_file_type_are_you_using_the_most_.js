/* You've been working with a lot of different file types recently as your interests have broadened.

But what file types are you using the most? With this question in mind we look at the following problem.

Given a List/Array of Filenames (strings) files return a List/Array of string(s) contatining the most common extension(s). If there is a tie, return a sorted list of all extensions.

Important Info:
Don't forget, you've been working with a lot of different file types, so expect some interesting extensions/file names/lengths in the random tests.
Filenames and extensions will only contain letters (case sensitive), and numbers.
If a file has multiple extensions (ie: mysong.mp3.als) only count the the last extension (.als in this case)
Examples
files = ['Lakey - Better days.mp3', 
         'Wheathan - Superlove.wav', 
         'groovy jam.als', 
         '#4 final mixdown.als', 
         'album cover.ps', 
         'good nights.mp3']
would return: ['.als', '.mp3'], as both of the extensions appear two times in files.

files = ['Lakey - Better days.mp3', 
         'Fisher - Stop it.mp3', 
         'Fisher - Losing it.mp3', 
         '#4 final mixdown.als', 
         'album cover.ps', 
         'good nights.mp3']
would return ['.mp3'], because it appears more times then any other extension, and no other extension has an equal amount of appearences. */


function solve(files) {
   let extensions = files.map((file) => {
      let index = file.lastIndexOf('.');
      let extension = file.substring(index);
      return extension;
   })
   return getFrequency(extensions);
}

const getFrequency = (extensions) => {
   const map = {};
   extensions.forEach((extension, index) => {
      if (!map[extension]) {
         map[extension] = 1
      } else {
         map[extension] = map[extension] + 1
      }
   })
   const max = Math.max(...Object.values(map));
   const arr = Object.keys(map).filter((ext) => {
      if (map[ext] === max) {
         return ext;
      }
      return null
   })
   return arr.sort();
}

solve(['dramatic.txt', 'incompetent.jar', 'alcoholic.wp', 'clumsy.py', 'abject.h', 'boring.exe', 'aloof.pr', 'familiar.py', 'fanatical.py', 'ill-informed.html', 'fierce.pr', 'accurate.html', 'grotesque.pr', 'brown.py', 'courageous.pt', 'grouchy.jar', 'giant.pt', 'dirty.h', 'abaft.jar', 'enormous.zbrush', 'creepy.cpp', 'beneficial.py', 'absorbing.ala', 'heartbreaking.html', 'exclusive.js', 'fluttering.html', 'happy.als', 'fresh.pr', 'adamant.txt', 'awful.maya', 'frightening.maya', 'bizarre.html', 'efficacious.exe', 'illegal.wav', 'dizzy.js', 'gusty.wp', 'delightful.pt', 'full.als', 'chivalrous.xml', 'filthy.js', 'functional.jar', 'conscious.wav', 'feeble.exe', 'hilarious.cpp', 'earthy.py', 'handy.txt', 'hollow.cpp', 'aggressive.js', 'fat.h', 'drunk.exe', 'clear.h', 'easy.wav', 'eatable.pt', 'grumpy.css', 'empty.exe', 'brief.jar', 'aggressive.txt', 'aggressive.txt', 'gruesome.ala', 'awake.txt', 'apathetic.mp3', 'holistic.pt', 'embarrassed.css', 'flashy.maya', 'exultant.ala', 'exuberant.exe', 'graceful.pt', 'dependent.py', 'gigantic.wp', 'husky.js', 'immense.pr', 'defiant.cpp', 'cooperative.html', 'frantic.maya', 'abashed.css', 'dysfunctional.h', 'gusty.js', 'dynamic.txt', 'dreary.pt', 'giddy.ala', 'exciting.css', 'best.als', 'humdrum.css', 'busy.jar', 'frail.cpp', 'cagey.wav'])