const options = [
  {
    name: 'size',
    values: ['small', 'medium', 'large']
  },
  {
    name: 'color',
    values: ['red', 'blue']
  },
  {
    name: 'material',
    values: ['cutton', 'polyester']
  },
]

let variants = []

function generateVariants(options, currentIndex, currentVariant){
  if(currentIndex === options.length){
    variants.push(currentVariant)
    return
  }

  let currentOption = options[currentIndex]

  for(let optionValue of currentOption.values){
    let newVariant = { ...currentVariant }
    newVariant[currentOption.name] = optionValue
    generateVariants(options, currentIndex + 1, newVariant)
  }
}

generateVariants(options, 0, {})

console.log(variants)
