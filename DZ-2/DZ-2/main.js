var starbox = {
  coffee: {
    latte: 'Latte',
    capuchino: 'Capuchino',
    americano: 'Americano'
  },
  tea: {
    green: 'Green Tea',
    black: 'Black Tea'
  }
}
var value = prompt('what would you like')

if (starbox.coffee[value]===undefined) {
  if (starbox.tea[value] !== undefined) {
    console.log(starbox.tea[value]);
  } else {
    console.error('error');
  }
}else {
  console.log(starbox.coffee[value]);
}






// var bublik = {
//   breakfast: {
//     Frenchtoast: 'гренки',
//     OmletewithCheese: 'омлет с сыром',
//     OmletewithMushrooms: 'омлет с грибами',
//     OmletewithVegetables: 'омлет с овощами',
//     ScrambledOrFriedEggs: 'яичница болтунья или глазунья ',
//     Oatmeal: 'каша овсянная',
//     SemolinaPorridge: 'каша манная',
//     BuckWheat: 'гречневая каша',
//     RicePoridge: 'рисовая каша',
//     CheesePancakes: 'сырники с джемом и сметаной',
//     PancakesWithHoneyAndj: 'блинчики с медом и с джемом',
//     YogurtsWithFruitsAndNuts: 'йогурт с фруктами и орехами',
//     WaflesWithCreamAndBarries: 'домашние вафли со слифками и ягодами',
//     HealthyBreakfast: 'здоровый завтрак',
//     BreakfastChampions: 'завтрак чемпиона',
//     EnglishBreakfast: 'Английский завтрак'
//   },
//   soups: {
//     LentilSoups: 'чечевичный суп',
//     TomatoSoups: 'томатный суп',
//     BroccoliWithSpinachCreamSoups: 'крем суп броколи со шпинатом',
//     VegetablesSoups: 'овощной суп',
//     PumpkinCreamSoup: 'тыквенный крем суп',
//     SolyankaSoups: 'солянка',
//     MushroomsCreamSoup: 'грибной крем суп',
//     SpysiGingerSoupWithMushrooms: 'острый имбирный суп с грибами'
//   },
//   salads: {
//     FreshSalsds: 'свежий салад',
//     VitaminkaSalad: 'витаминка',
//     Moscow: 'московский',
//     SaladWithSalmon: 'салад семгой',
//     greekSalad: 'греческий салад',
//     WarmSaladRorsto: 'теплый салад от шефа',
//     Rostbivs: 'ростиф',
//     BeedRootSalad: 'салад со свеклой',
//     SaladWithTune: 'салад с тунцом',
//     saladWithVeal: 'теплый салад с телятиной',
//     CaesarWithChicken: 'цезарь с курицей',
//     CaesarWithShrimps: 'цезарь с креветками',
//     SaladWithDreadTomates: 'салад с вялеными помидорами'
//   },
// }
// var volou = promt ('what whould you like')
// if (bublik.breakfast[value] === undefined) {
//   if (bublik.salads[value] === undefined) {
//     if (bublik.soups[value] !== undefined) {
//       console.log()
//     }
//   }
// }








