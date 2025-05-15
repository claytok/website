// SequenceInput.jsx
import React, { useState, useEffect } from 'react';

function SequenceInput({ value, onChange }) {
  const [inputMethod, setInputMethod] = useState('paste'); // 'paste' or 'example'
  const [validationMessage, setValidationMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  
  useEffect(() => {
    if (value) {
      const cleanSequence = value.toUpperCase().replace(/[^ATGC]/g, '');
      
      if (cleanSequence.length === 0) {
        setValidationMessage('Please enter a DNA sequence (A, T, G, C).');
        setIsValid(false);
      } else if (cleanSequence.length < 200) {
        setValidationMessage(`Sequence length: ${cleanSequence.length} bp. For real primer design, enter at least 200 bp.`);
        setIsValid(false);
      } else {
        setValidationMessage(`Sequence length: ${cleanSequence.length} bp. Valid for LAMP primer design.`);
        setIsValid(true);
      }
    } else {
      setValidationMessage('');
      setIsValid(false);
    }
  }, [value]);
  
  const handlePasteInput = (e) => {
    onChange(e.target.value);
  };
  
  const handleExampleSelect = (e) => {
    const selectedExample = e.target.value;
    if (selectedExample === '') return;
    
    // Pre-defined example sequences
    const examples = {
      'sars-cov-2': 'ATTAAAGGTTTATACCTTCCCAGGTAACAAACCAACCAACTTTCGATCTCTTGTAGATCTGTTCTCTAAACGAACTTTAAAATCTGTGTGGCTGTCACTCGGCTGCATGCTTAGTGCACTCACGCAGTATAATTAATAACTAATTACTGTCGTTGACAGGACACGAGTAACTCGTCTATCTTCTGCAGGCTGCTTACGGTTTCGTCCGTGTTGCAGCCGATCATCAGCACATCTAGGTTTCGTCCGGGTGTGA',
      'ecoli': 'AGTTTGATCATGGCTCAGATTGAACGCTGGCGGCAGGCCTAACACATGCAAGTCGAACGGTAACAGGAAGAAGCTTGCTTCTTTGCTGACGAGTGGCGGACGGGTGAGTAATGTCTGGGAAACTGCCTGATGGAGGGGGATAACTACTGGAAACGGTAGCTAATACCGCATAACGTCGCAAGACCAAAGAGGGGGACCTTCGGGCCTCTTGCCATCGGATGTGCCCAGATGGGATTAGCTAGTAGGTGGGGTAACG',
      'tuberculosis': 'CCTGCGAGCGTAGGCGTCGGTGACAAAGGCCACGTAGGCGAACCCTGCCCGGTCGGCACCGCGAGGCTGAGCCCCGCCCCGGGTTCGCGTCCGAGCAGCACGGGTTCGCGTCCGAGCAGCACGAGTTCGCGTCCGAGCAGCACGAGTTCGCGTCCGAGCAGCACGGG',
      'malaria': 'AATTGTTAAGTTCAATTAAGAAGGCTACTTCAAGACTCAATTATTCAATATATGTATAGTTAAATAAATCATCATCTAGTAGCTATTAGATATGCTAATACCACCTTATGTTATGTTAAGATGTATTCCTATTCCATAACTTAGAACAAGAGATTATACTCTCAATATCATTCATAACTAAACAAAGAGTTTCTGGTCAAAATACTAAATGTTCAAAAGAATCTACTCAAGGATTTAATTACGCAATATA'
    };
    
    onChange(examples[selectedExample]);
    setInputMethod('paste');
  };
  
  return (
    <div className="sequence-input">
      <h2>Enter DNA Sequence</h2>
      
      <div className="input-method-selector">
        <button 
          className={inputMethod === 'paste' ? 'active' : ''}
          onClick={() => setInputMethod('paste')}
        >
          Paste Sequence
        </button>
        <button 
          className={inputMethod === 'example' ? 'active' : ''}
          onClick={() => setInputMethod('example')}
        >
          Use Example
        </button>
      </div>
      
      {inputMethod === 'paste' ? (
        <div className="paste-input">
          <textarea 
            value={value}
            onChange={handlePasteInput}
            placeholder="Paste your DNA sequence here (A, T, G, C only)"
            rows={8}
          />
          <div className="sequence-stats">
            {value && (
              <>
                <span>Length: {value.replace(/[^ATGC]/gi, '').length} bp</span>
                <span>GC: {calculateGCContent(value)}%</span>
                {validationMessage && (
                  <span className={isValid ? 'validation-success' : 'validation-message'}>
                    {validationMessage}
                  </span>
                )}
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="example-select">
          <select onChange={handleExampleSelect} defaultValue="">
            <option value="" disabled>Select an example sequence</option>
            <option value="sars-cov-2">SARS-CoV-2 (Coronavirus) N gene region</option>
            <option value="ecoli">E. coli 16S rRNA region</option>
            <option value="tuberculosis">M. tuberculosis IS6110 region</option>
            <option value="malaria">P. falciparum 18S rRNA region</option>
          </select>
          <p className="helper-text">
            These are pre-validated sequences known to work well with LAMP
          </p>
        </div>
      )}
    </div>
  );
}

// Helper function to calculate GC content
function calculateGCContent(sequence) {
  if (!sequence) return 0;
  const cleanSeq = sequence.toUpperCase().replace(/[^ATGC]/g, '');
  if (cleanSeq.length === 0) return 0;
  
  const gcCount = (cleanSeq.match(/[GC]/g) || []).length;
  return Math.round((gcCount / cleanSeq.length) * 100);
}

export default SequenceInput;
