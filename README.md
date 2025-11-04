# Pila Aequor DNA Simulation

A JavaScript project that simulates the DNA of Pila Aequor, a mysterious organism found near hydrothermal vents. This project demonstrates object creation, DNA manipulation, and genetic analysis through factory functions and methods.

## Features

- **DNA Simulation**: Creates organism specimens with 15-base DNA strands
- **Mutation**: Randomly mutates DNA bases while ensuring actual changes
- **DNA Comparison**: Calculates percentage match between different specimens
- **Survival Prediction**: Determines survival likelihood based on C/G base content
- **Complement Strand**: Generates complementary DNA strands
- **Batch Creation**: Automatically creates multiple viable specimens
- **Genetic Analysis**: Finds the most related specimens in a population

## Project Structure
├── pAeqourFactory() # Main factory function for creating specimens
├── returnRandBase() # Returns random DNA base (A, T, C, G)
├── mockUpStrand() # Generates random 15-base DNA strand
├── createSpecimen() # Creates multiple specimen instances
└── findRelatedDNAs() # Finds most genetically similar specimens

## Methods Available

### Specimen Methods
- `mutate()` - Randomly changes one DNA base (never to same base)
- `compareDNA(anotherSpecimen)` - Compares DNA and returns match percentage
- `willLikelySurvive()` - Returns true if ≥60% C/G bases
- `complementStrand()` - Returns complementary DNA strand following base pairing rules

### Utility Functions
- `createSpecimen(num)` - Creates specified number of specimen instances
- `findRelatedDNAs(specimens)` - Analyzes array to find most related specimen pair

## Usage Example

```javascript
// Create a single specimen
const specimen1 = pAeqourFactory(1, mockUpStrand());

// Check survival chances
console.log(specimen1.willLikelySurvive()); // true or false

// Mutate DNA
specimen1.mutate();

// Create complementary strand
const complement = specimen1.complementStrand();

// Create 30 surviving specimens
const specimens = createSpecimen(30);

// Find most related specimens
findRelatedDNAs(specimens);
```

## DNA Base Rules

The simulation follows real-world DNA base pairing rules:

| Base Name | Symbol | Complementary Base |
|-----------|--------|-------------------|
| Adenine   | A      | Thymine (T)       |
| Thymine   | T      | Adenine (A)       |
| Cytosine  | C      | Guanine (G)       |
| Guanine   | G      | Cytosine (C)      |

**Survival Requirement**: Organisms must contain at least 60% Cytosine (C) or Guanine (G) bases to survive in their environment.

## Key Implementation Details

- Each specimen has exactly 15 DNA bases
- Mutations always result in a different base
- Survival prediction based on C/G content percentage
- Automatic specimen numbering in batch creation
- Comprehensive DNA comparison across all specimen pairs

## Technologies Used

- JavaScript (ES6+)
- Factory Functions
- Array Methods
- Object-oriented Programming
