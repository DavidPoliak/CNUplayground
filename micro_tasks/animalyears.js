const humanYearsCatYearsDogYears = humanYears => {
    const animalYears = (humanYears, animalYear) => 24 + animalYear * (humanYears - 2)
    if(humanYears > 0) {
      return humanYears === 1 ? [1, 15, 15]
            :humanYears === 2 ? [2, 24, 24]
            :[humanYears, animalYears(humanYears, 4), animalYears(humanYears, 5)]
    }   
  }      
  
  