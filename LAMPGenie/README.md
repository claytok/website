# LAMPGenie

LAMP Primer Design Assistant for Rapid Molecular Diagnostics

## Overview

LAMPGenie is a web application for designing Loop-mediated Isothermal Amplification (LAMP) primers and optimizing reaction conditions based on the sample type and target organism.

## Features

- Design LAMP primers (F3, B3, FIP, BIP, LF, LB) for any target sequence
- Optimized reaction conditions based on sample type
- Intelligent enzyme recommendation system
- Visual primer binding site display
- Sample-specific optimization

## Enzyme Recommendation System

LAMPGenie uses an intelligent algorithm to recommend the most appropriate Bst DNA polymerase version based on:

1. **Sample Type**: Different sample types contain different inhibitors and require different polymerase properties:
   - Blood and environmental water samples → Bst 3.0 (enhanced inhibitor tolerance)
   - Saliva samples → Mix of Bst 2.0 or Bst 3.0 depending on probable inhibitor content
   - Pure culture and extracted DNA → Standard Bst 2.0 for typical applications

2. **Sequence Characteristics**: 
   - High GC content sequences (>60%) → WarmStart versions recommended
   - Clinical/diagnostic applications → WarmStart versions preferred to reduce false positives

3. **Target Organism**:
   - SARS-CoV-2 and unknown organisms → Higher probability of WarmStart recommendation
   - For known environmental organisms → Standard versions more common

### Polymerase Options

- **Bst 2.0 DNA Polymerase**: Standard version, good for most applications
- **Bst 2.0 WarmStart DNA Polymerase**: Contains aptamer for room temperature setup, reducing false positives
- **Bst 3.0 DNA Polymerase**: Higher activity, improved tolerance to inhibitors
- **Bst 3.0 WarmStart DNA Polymerase**: Combines inhibitor tolerance with hot-start capability

## Local Development

```
npm install
npm run dev
```

## License

MIT
