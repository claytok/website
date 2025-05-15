// SVG icons data
const svgIcons = {
    "dna-helix": `<svg viewBox="0 0 64 64" width="100%" height="100%">
        <!-- Main helical strands -->
        <path d="M 20,4 C 25,8 39,8 44,12 C 39,16 25,16 20,20 C 25,24 39,24 44,28 C 39,32 25,32 20,36 C 25,40 39,40 44,44 C 39,48 25,48 20,52 C 25,56 39,56 44,60" fill="none" stroke="#1B2A41" stroke-width="2" />
        <path d="M 44,4 C 39,8 25,8 20,12 C 25,16 39,16 44,20 C 39,24 25,24 20,28 C 25,32 39,32 44,36 C 39,40 25,40 20,44 C 25,48 39,48 44,52 C 39,56 25,56 20,60" fill="none" stroke="#FF6B6B" stroke-width="2" />
        
        <!-- Base pairs connecting the strands -->
        <line stroke="#4ECDC4" stroke-width="1.5" x1="20" y1="4" x2="44" y2="4" />
        <line stroke="#4ECDC4" stroke-width="1.5" x1="20" y1="20" x2="44" y2="20" />
        <line stroke="#4ECDC4" stroke-width="1.5" x1="20" y1="36" x2="44" y2="36" />
        <line stroke="#4ECDC4" stroke-width="1.5" x1="20" y1="52" x2="44" y2="52" />
        
        <!-- Base pairs - adjusted to be visible -->
        <line stroke="#4ECDC4" stroke-width="1.5" x1="26" y1="12" x2="38" y2="12" />
        <line stroke="#4ECDC4" stroke-width="1.5" x1="26" y1="28" x2="38" y2="28" />
        <line stroke="#4ECDC4" stroke-width="1.5" x1="26" y1="44" x2="38" y2="44" />
        <line stroke="#4ECDC4" stroke-width="1.5" x1="26" y1="60" x2="38" y2="60" />
    </svg>`,
    "nanoparticle": `<svg viewBox="0 0 64 64" width="100%" height="100%">
        <!-- Main nanoparticle sphere with flat color -->
        <circle cx="32" cy="32" r="20" fill="#4ECDC4" stroke="#1B2A41" stroke-width="2" />
        
        <!-- Surface functionalization molecules - simplified and flatter -->
        <line x1="32" y1="12" x2="32" y2="6" stroke="#FF6B6B" stroke-width="2" />
        <circle cx="32" cy="4" r="2" fill="#FF6B6B" />
        
        <line x1="50" y1="25" x2="54" y2="22" stroke="#FF6B6B" stroke-width="2" />
        <circle cx="56" cy="20" r="2" fill="#FF6B6B" />
        
        <line x1="48" y1="40" x2="54" y2="44" stroke="#FF6B6B" stroke-width="2" />
        <circle cx="56" cy="46" r="2" fill="#FF6B6B" />
        
        <line x1="32" y1="52" x2="32" y2="58" stroke="#FF6B6B" stroke-width="2" />
        <circle cx="32" cy="60" r="2" fill="#FF6B6B" />
        
        <line x1="14" y1="25" x2="10" y2="22" stroke="#FF6B6B" stroke-width="2" />
        <circle cx="8" cy="20" r="2" fill="#FF6B6B" />
        
        <line x1="16" y1="40" x2="10" y2="44" stroke="#FF6B6B" stroke-width="2" />
        <circle cx="8" cy="46" r="2" fill="#FF6B6B" />
        
        <!-- Core structure in flatter style -->
        <circle cx="32" cy="32" r="10" fill="none" stroke="#1B2A41" stroke-width="2" stroke-dasharray="3,3" />
        
        <!-- Add some dots inside for texture (flat style) -->
        <circle cx="28" cy="28" r="2" fill="#FFFFFF" fill-opacity="0.7" />
        <circle cx="36" cy="36" r="2" fill="#FFFFFF" fill-opacity="0.7" />
        <circle cx="30" cy="34" r="1.5" fill="#FFFFFF" fill-opacity="0.7" />
    </svg>`,
    "pipette": `<svg viewBox="0 0 64 64" width="100%" height="100%">
        <!-- Pipette body -->
        <rect fill="#E0E0E0" height="32" rx="2" width="12" x="26" y="8" />
        
        <!-- Pipette upper part -->
        <rect fill="#1B2A41" height="10" rx="2" width="16" x="24" y="4" />
        
        <!-- Plunger button -->
        <rect fill="#FF6B6B" height="3" rx="1" width="10" x="27" y="1" />
        
        <!-- Tip connector -->
        <path d="M 30,40 L 26,44 L 38,44 L 34,40 Z" fill="#666666" />
        
        <!-- Pipette tip -->
        <path d="M 28,44 L 26,48 L 26,56 C 26,58 27,58 32,58 C 37,58 38,58 38,56 L 38,48 L 36,44 Z" fill="#E0E0E0" />
        
        <!-- Liquid in tip -->
        <path d="M 28,54 L 28,56 C 28,57 29,57 32,57 C 35,57 36,57 36,56 L 36,54 Z" fill="#4ECDC4" />
        
        <!-- Volume markings -->
        <line stroke="#1B2A41" stroke-width="0.7" x1="38" x2="40" y1="10" y2="10" />
        <line stroke="#1B2A41" stroke-width="0.7" x1="38" x2="40" y1="15" y2="15" />
        <line stroke="#1B2A41" stroke-width="0.7" x1="38" x2="40" y1="20" y2="20" />
        <line stroke="#1B2A41" stroke-width="0.7" x1="38" x2="40" y1="25" y2="25" />
        <line stroke="#1B2A41" stroke-width="0.7" x1="38" x2="40" y1="30" y2="30" />
        <line stroke="#1B2A41" stroke-width="0.7" x1="38" x2="40" y1="35" y2="35" />
        
        <!-- Highlights and details -->
        <line stroke="#FFFFFF" stroke-width="1" x1="28" x2="28" y1="10" y2="38" stroke-opacity="0.3" />
    </svg>`,
    "sop-checklist": `<svg viewBox="0 0 64 64" width="100%" height="100%">
        <rect fill="#E0E0E0" height="44" rx="4" width="32" x="16" y="10" />
        <rect fill="#1B2A41" height="6" rx="2" width="16" x="24" y="10" />
        <line stroke="#1B2A41" stroke-width="2" x1="22" x2="42" y1="20" y2="20" />
        <circle cx="20" cy="20" fill="#4ECDC4" r="2" />
        <line stroke="#1B2A41" stroke-width="2" x1="22" x2="42" y1="30" y2="30" />
        <circle cx="20" cy="30" fill="#4ECDC4" r="2" />
        <line stroke="#1B2A41" stroke-width="2" x1="22" x2="42" y1="40" y2="40" />
        <circle cx="20" cy="40" fill="#4ECDC4" r="2" />
    </svg>`,
    "cell": `<svg viewBox="0 0 64 64" width="100%" height="100%">
        <!-- Cell membrane - simplified with solid fill -->
        <circle cx="32" cy="32" r="28" fill="#B3E5FC" stroke="#1B2A41" stroke-width="1.5" />
        
        <!-- Cell nucleus - simplified with solid fill -->
        <circle cx="32" cy="32" r="12" fill="#FFF176" stroke="#1B2A41" stroke-width="1.2" />
        
        <!-- Endoplasmic reticulum - simplified -->
        <path d="M 20,20 C 15,18 12,22 17,24 C 14,26 18,30 22,27" fill="none" stroke="#FF6B6B" stroke-width="2" />
        
        <!-- Mitochondria - simplified -->
        <ellipse cx="46" cy="20" rx="5" ry="3" fill="#4ECDC4" stroke="#1B2A41" stroke-width="1" />
        <line x1="41" y1="20" x2="51" y2="20" stroke="#1B2A41" stroke-width="1" />
        <line x1="43" y1="17.5" x2="43" y2="22.5" stroke="#1B2A41" stroke-width="1" />
        <line x1="46" y1="17.5" x2="46" y2="22.5" stroke="#1B2A41" stroke-width="1" />
        <line x1="49" y1="17.5" x2="49" y2="22.5" stroke="#1B2A41" stroke-width="1" />
        
        <!-- Golgi apparatus - simplified -->
        <path d="M 24,46 C 28,44 32,45 36,44" fill="none" stroke="#3949AB" stroke-width="2" />
        <path d="M 25,48 C 29,46 33,47 37,46" fill="none" stroke="#3949AB" stroke-width="2" />
        
        <!-- Lysosomes - simplified -->
        <circle cx="46" cy="46" r="3" fill="#FF5252" stroke="#1B2A41" stroke-width="1" />
        <circle cx="18" cy="36" r="2.5" fill="#FF5252" stroke="#1B2A41" stroke-width="1" />
        
        <!-- Ribosomes - simplified -->
        <circle cx="24" cy="28" r="1.5" fill="#673AB7" />
        <circle cx="41" cy="32" r="1.5" fill="#673AB7" />
        <circle cx="26" cy="41" r="1.5" fill="#673AB7" />
    </svg>`,
    "lfa": `<svg viewBox="0 0 64 64" width="100%" height="100%">
        <rect fill="#E0E0E0" height="12" rx="3" width="44" x="10" y="26" />
        <rect fill="#FF6B6B" height="8" width="2" x="20" y="28" />
        <rect fill="#4ECDC4" height="8" width="2" x="32" y="28" />
        <line stroke="#1B2A41" stroke-width="2" x1="12" x2="48" y1="20" y2="20" />
        <polygon fill="#1B2A41" points="48,18 54,20 48,22" />
    </svg>`,
    // Drawing tools
    "line": `<svg viewBox="0 0 24 24" width="100%" height="100%"><path d="M4,20L20,4" stroke="currentColor" stroke-width="2" fill="none"/></svg>`,
    "arrow": `<svg viewBox="0 0 24 24" width="100%" height="100%">
        <defs>
            <marker id="arrowhead-icon" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" stroke="none"/>
            </marker>
        </defs>
        <line x1="4" y1="20" x2="17" y2="7" stroke="currentColor" stroke-width="2" fill="none" marker-end="url(#arrowhead-icon)"/>
    </svg>`,
    "rectangle": `<svg viewBox="0 0 24 24" width="100%" height="100%"><rect x="4" y="4" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"/></svg>`,
    "circle": `<svg viewBox="0 0 24 24" width="100%" height="100%"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2" fill="none"/></svg>`
};

// Templates for the template buttons
const templates = {
    // Removing the templates as requested
};

// State variables
let currentTool = "microscope";
let isDragging = false;
let currentDragElement = null;
let offsetX = 0;
let offsetY = 0;
let selectedElement = null;
let activeMenu = null;
let canvasScale = 1;
let history = [];
let historyIndex = -1;
let elementCounter = 0;
let currentColor = "#000000"; // Default color for drawing tools
// Variables for drawing
let isDrawing = false;
let startX = 0;
let startY = 0;
let drawingElement = null;

// Resize functionality
let isResizing = false;
let currentResizeElement = null;
let currentResizeHandle = null;
let originalWidth = 0;
let originalHeight = 0;
let originalLeft = 0;
let originalTop = 0;
let startResizeX = 0;
let startResizeY = 0;

// DOM Elements
const canvas = document.getElementById("editor-canvas");
const statusBar = document.getElementById("status-bar");
const toast = document.getElementById("toast");

// Initialize the app
function init() {
    // Set up sidebar tool buttons
    document.querySelectorAll('.sidebar-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update current tool
            currentTool = btn.dataset.tool;
            updateStatusBar();
            
            // Check if this is an image tool (not a drawing tool)
            const drawingTools = ['line', 'arrow', 'rectangle', 'circle', 'text'];
            if (!drawingTools.includes(currentTool)) {
                // Directly add the image to the canvas when tool is selected
                const canvasRect = canvas.getBoundingClientRect();
                const x = canvasRect.width / 2;
                const y = canvasRect.height / 2;
                addElement(x, y, currentTool);
            }
        });
    });
    
    // Set up delete button
    const deleteBtn = document.getElementById('delete-btn');
    deleteBtn.addEventListener('click', () => {
        if (selectedElement) {
            const elementToRemove = selectedElement;
            deselectElement();
            elementToRemove.remove();
            updateStatusBar();
            saveToHistory();
            showToast('Element deleted');
        } else {
            showToast('No element selected');
            deleteBtn.disabled = true;
            setTimeout(() => {
                deleteBtn.disabled = false;
            }, 1000);
        }
    });
    
    // Set up drop-down menus
    document.querySelectorAll('.menu-item').forEach(menuItem => {
        menuItem.addEventListener('click', (e) => {
            if (e.target === menuItem) {
                // Close any active menu
                if (activeMenu && activeMenu !== menuItem) {
                    activeMenu.classList.remove('active');
                }
                
                // Toggle current menu
                menuItem.classList.toggle('active');
                activeMenu = menuItem.classList.contains('active') ? menuItem : null;
                
                // Prevent click from bubbling to document
                e.stopPropagation();
            }
        });
    });
    
    // Close dropdown when clicking elsewhere
    document.addEventListener('click', () => {
        if (activeMenu) {
            activeMenu.classList.remove('active');
            activeMenu = null;
        }
    });
    
    // Set up menu actions
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const action = item.dataset.action;
            handleMenuAction(action);
            
            // Close menu after action
            if (activeMenu) {
                activeMenu.classList.remove('active');
                activeMenu = null;
            }
            
            // Prevent bubbling
            e.stopPropagation();
        });
    });
    
    // Set up template buttons
    document.querySelectorAll('.template-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const template = btn.dataset.template;
            if (template === "export") {
                exportAsPNG();
            } else {
                applyTemplate(template);
            }
        });
    });
    
    // Set up format buttons
    document.querySelectorAll('.format-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (selectedElement && selectedElement.classList.contains('text-element')) {
                const format = btn.title.toLowerCase();
                applyFormatting(selectedElement, format);
                btn.classList.toggle('active');
            } else {
                showToast('Please select a text element first');
            }
        });
    });
    
    // Set up font selectors
    document.getElementById('font-select').addEventListener('change', (e) => {
        if (selectedElement && selectedElement.classList.contains('text-element')) {
            selectedElement.style.fontFamily = e.target.value;
            showToast(`Font changed to ${e.target.value}`);
        } else {
            showToast('Please select a text element first');
        }
    });
    
    document.getElementById('font-size').addEventListener('change', (e) => {
        if (selectedElement && selectedElement.classList.contains('text-element')) {
            selectedElement.style.fontSize = e.target.value + 'px';
            showToast(`Font size changed to ${e.target.value}px`);
        } else {
            showToast('Please select a text element first');
        }
    });
    
    // Set up color picker
    document.getElementById('color-picker').addEventListener('change', (e) => {
        currentColor = e.target.value;
        showToast(`Color changed to ${currentColor}`);
        
        // Update selected element color if any element is selected
        if (selectedElement) {
            applySVGColor(selectedElement, currentColor);
            saveToHistory();
        }
    });
    
    // Set up canvas mouse events for drawing
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    
    // Set up canvas click handler for adding elements
    canvas.addEventListener('click', (e) => {
        // Only add if click is directly on the canvas (not on an element)
        if (e.target === canvas) {
            const rect = canvas.getBoundingClientRect();
            const x = (e.clientX - rect.left) / canvasScale;
            const y = (e.clientY - rect.top) / canvasScale;
            
            if (currentTool === 'text') {
                addTextElement(x, y);
            }
        }
    });
    
    // Set up double-click handler for text editing
    canvas.addEventListener('dblclick', (e) => {
        if (e.target.classList.contains('text-element') || e.target.parentElement.classList.contains('text-element')) {
            const textElement = e.target.classList.contains('text-element') ? e.target : e.target.parentElement;
            makeTextEditable(textElement);
        }
    });
    
    // Setup keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Delete key to remove selected element
        if ((e.key === 'Delete' || e.key === 'Backspace') && selectedElement) {
            e.preventDefault(); // Prevent browser back navigation with backspace
            const elementToRemove = selectedElement;
            deselectElement();
            elementToRemove.remove();
            updateStatusBar();
            saveToHistory();
            showToast('Element deleted');
        }
        
        // Ctrl+S to save
        if (e.key === 's' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault(); // Prevent browser save dialog
            handleMenuAction('save');
        }
        
        // Ctrl+Z for undo
        if (e.key === 'z' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            undo();
        }
        
        // Ctrl+Y or Ctrl+Shift+Z for redo
        if ((e.key === 'y' && (e.ctrlKey || e.metaKey)) || 
            (e.key === 'z' && (e.ctrlKey || e.metaKey) && e.shiftKey)) {
            e.preventDefault();
            redo();
        }
        
        // Escape to deselect
        if (e.key === 'Escape') {
            if (selectedElement) {
                deselectElement();
            }
            
            // Close any open menu
            if (activeMenu) {
                activeMenu.classList.remove('active');
                activeMenu = null;
            }
        }
    });
    
    // Save initial state
    saveToHistory();
    
    // No image added on load (removed as requested)
    showToast('Welcome to SciCanvas!', 3000);
    
    // Update status bar
    updateStatusBar();
}

// Function to apply color to SVG elements
function applySVGColor(element, color) {
    if (!element) return;
    
    // Get tool type to check if it's one of our colored icons
    const toolType = element.dataset.tool;
    const coloredIcons = ['dna-helix', 'nanoparticle', 'pipette', 'sop-checklist', 'cell', 'lfa'];
    
    // If it's one of our colored icons, don't override the colors
    if (coloredIcons.includes(toolType)) {
        return; // Skip color application for our special colored icons
    }
    
    // For other elements, apply the selected color
    // Update all SVG paths, lines, rectangles, circles
    const svgPaths = element.querySelectorAll('path, rect, circle, line, ellipse');
    svgPaths.forEach(path => {
        path.setAttribute('stroke', color);
        
        // Make sure fill is set to none for shape elements
        if (path.tagName.toLowerCase() !== 'polygon') {
            path.setAttribute('fill', 'none');
        }
    });
    
    // Update arrowhead polygons
    const polygons = element.querySelectorAll('polygon');
    polygons.forEach(polygon => {
        polygon.setAttribute('fill', color);
    });
    
    // Update markers if present
    const markers = element.querySelectorAll('marker');
    markers.forEach(marker => {
        const markerPolygon = marker.querySelector('polygon');
        if (markerPolygon) {
            markerPolygon.setAttribute('fill', color);
        }
    });
}

// Function to add a new element to the canvas
function addElement(x, y, toolType) {
    // Skip if it's a drawing tool - we handle those differently
    const drawingTools = ['line', 'arrow', 'rectangle', 'circle', 'text'];
    if (drawingTools.includes(toolType)) {
        if (toolType === 'text') {
            addTextElement(x, y);
        }
        return;
    }
    
    // Create element container
    const element = document.createElement('div');
    element.className = 'draggable-element svg-element';
    element.dataset.tool = toolType;
    element.id = `element-${++elementCounter}`;
    element.style.position = 'absolute';
    element.style.left = `${x - 50}px`;  // Center the element
    element.style.top = `${y - 50}px`;
    element.style.width = '100px';  // Default size
    element.style.height = '100px';
    element.style.cursor = 'move';
    
    // Add the SVG icon
    if (svgIcons[toolType]) {
        element.innerHTML = svgIcons[toolType];
    } else {
        console.warn(`No SVG icon found for tool: ${toolType}`);
        return;
    }
    
    // Add the element to the canvas
    canvas.appendChild(element);
    
    // Apply default color
    applySVGColor(element, currentColor);
    
    // Add event listeners
    element.addEventListener('mousedown', startDrag);
    element.addEventListener('click', (e) => {
        e.stopPropagation();
        selectElement(element);
    });
    
    // Select the newly added element
    selectElement(element);
    
    // Save to history
    saveToHistory();
    
    return element;
}

// Function to add a text element
function addTextElement(x, y) {
    elementCounter++;
    const element = document.createElement('div');
    element.className = 'text-element';
    element.id = `element-${elementCounter}`;
    element.textContent = 'Double-click to edit';
    element.contentEditable = false;
    element.dataset.tool = 'text';
    
    // Position element
    element.style.left = x + 'px';
    element.style.top = y + 'px';
    
    // Add drag and selection handlers
    element.addEventListener('mousedown', startDrag);
    element.addEventListener('click', (e) => {
        selectElement(element);
        e.stopPropagation(); // Prevent canvas click
    });
    
    // Add right-click context menu for delete
    element.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        selectElement(element);
        
        // Show a confirmation or directly delete
        const confirmDelete = confirm('Delete this text element?');
        if (confirmDelete) {
            const elementToRemove = selectedElement;
            deselectElement();
            elementToRemove.remove();
            updateStatusBar();
            saveToHistory();
            showToast('Text element deleted');
        }
    });
    
    // Add to canvas
    canvas.appendChild(element);
    
    // Select the new element
    selectElement(element);
    
    // Make it editable
    makeTextEditable(element);
    
    // Save state
    saveToHistory();
    
    // Update status
    updateStatusBar('Added text');
}

// Function to make text editable
function makeTextEditable(element) {
    element.contentEditable = true;
    element.focus();
    
    // Select all text
    const range = document.createRange();
    range.selectNodeContents(element);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    
    // Save when focus is lost
    element.addEventListener('blur', () => {
        element.contentEditable = false;
        saveToHistory();
    }, { once: true });
}

// Function to apply formatting to text
function applyFormatting(element, format) {
    switch (format) {
        case 'bold':
            if (element.style.fontWeight === 'bold') {
                element.style.fontWeight = 'normal';
            } else {
                element.style.fontWeight = 'bold';
            }
            break;
        case 'italic':
            if (element.style.fontStyle === 'italic') {
                element.style.fontStyle = 'normal';
            } else {
                element.style.fontStyle = 'italic';
            }
            break;
        case 'underline':
            if (element.style.textDecoration === 'underline') {
                element.style.textDecoration = 'none';
            } else {
                element.style.textDecoration = 'underline';
            }
            break;
    }
    saveToHistory();
}

// Function to select an element
function selectElement(element) {
    // Deselect any previously selected element
    if (selectedElement && selectedElement !== element) {
        deselectElement();
    }
    
    // Set the new selected element
    selectedElement = element;
    element.classList.add('selected');
    
    // Update selected element styling
    element.style.outline = "2px solid #4361ee";
    
    // Add resizing handles
    if (!element.querySelector('.resize-handle')) {
        ['nw', 'ne', 'se', 'sw'].forEach(position => {
            const handle = document.createElement('div');
            handle.className = `resize-handle ${position}`;
            handle.style.position = 'absolute';
            handle.style.width = '8px';
            handle.style.height = '8px';
            handle.style.backgroundColor = '#4361ee';
            handle.style.borderRadius = '50%';
            handle.style.cursor = position + '-resize';
            
            // Position the handle
            if (position.includes('n')) handle.style.top = '-4px';
            if (position.includes('s')) handle.style.bottom = '-4px';
            if (position.includes('w')) handle.style.left = '-4px';
            if (position.includes('e')) handle.style.right = '-4px';
            
            // Add resize event listeners
            handle.addEventListener('mousedown', startResize);
            
            element.appendChild(handle);
        });
    }
    
    // Update status bar
    updateStatusBar();
    
    // Update format buttons to reflect text element formatting
    if (element.classList.contains('text-element')) {
        const fontSize = parseFloat(window.getComputedStyle(element).fontSize);
        document.getElementById('font-size').value = Math.round(fontSize);
        document.getElementById('font-select').value = window.getComputedStyle(element).fontFamily.replace(/"/g, '').replace(/^"|"$/g, '');
        
        // Update format buttons
        document.getElementById('bold-btn').classList.toggle('active', window.getComputedStyle(element).fontWeight > 400);
        document.getElementById('italic-btn').classList.toggle('active', window.getComputedStyle(element).fontStyle === 'italic');
        document.getElementById('underline-btn').classList.toggle('active', window.getComputedStyle(element).textDecoration.includes('underline'));
    }
    
    // If it's an SVG element update color picker
    if (element.classList.contains('svg-element')) {
        // Get the SVG fill color
        const svgElement = element.querySelector('svg');
        const paths = svgElement.querySelectorAll('path, circle, rect, polygon, line');
        if (paths.length > 0) {
            const currentColorEl = paths[0].getAttribute('fill') || paths[0].getAttribute('stroke');
            if (currentColorEl && currentColorEl !== 'none' && currentColorEl !== 'currentColor') {
                document.getElementById('color-picker').value = currentColorEl;
            }
        }
    }
}

// Function to deselect the current element
function deselectElement() {
    if (selectedElement) {
        selectedElement.style.outline = 'none';
        selectedElement.style.outlineOffset = '0';
        selectedElement.classList.remove('selected');
        
        // Remove all resize handles
        const handles = selectedElement.querySelectorAll('.resize-handle');
        handles.forEach(handle => handle.remove());
        
        selectedElement = null;
        updateStatusBar();
    }
}

// Drag handlers
function startDrag(e) {
    // Prevent default to stop text selection
    e.preventDefault();
    
    // Get current element
    currentDragElement = e.currentTarget;
    
    // Select the element
    selectElement(currentDragElement);
    
    // Calculate offsets
    const rect = currentDragElement.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    
    // Set dragging state
    isDragging = true;
    
    // Add document event listeners
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
}

function drag(e) {
    if (isDragging && currentDragElement) {
        // Get canvas
        const canvasRect = canvas.getBoundingClientRect();
        
        // Calculate new position relative to canvas with scale factor
        let newX = (e.clientX - canvasRect.left - offsetX) / canvasScale;
        let newY = (e.clientY - canvasRect.top - offsetY) / canvasScale;
        
        // Constrain to canvas bounds
        newX = Math.max(0, Math.min(newX, canvas.offsetWidth - currentDragElement.offsetWidth));
        newY = Math.max(0, Math.min(newY, canvas.offsetHeight - currentDragElement.offsetHeight));
        
        // Update position
        currentDragElement.style.left = newX + 'px';
        currentDragElement.style.top = newY + 'px';
        
        // Update status bar with coordinates
        updateStatusBar(`Position: ${Math.round(newX)}, ${Math.round(newY)} px`);
    }
}

function stopDrag() {
    if (isDragging && currentDragElement) {
        isDragging = false;
        currentDragElement = null;
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDrag);
        
        // Save to history when drag ends
        saveToHistory();
    }
}

// Resize functionality
function startResize(e) {
    e.preventDefault();
    e.stopPropagation();
    
    if (selectedElement) {
        isResizing = true;
        currentResizeElement = selectedElement;
        currentResizeHandle = e.target.className.split(' ')[1]; // Get the position (nw, ne, se, sw)
        
        // Store original dimensions and position
        const rect = currentResizeElement.getBoundingClientRect();
        originalWidth = rect.width;
        originalHeight = rect.height;
        originalLeft = rect.left;
        originalTop = rect.top;
        
        // Store starting mouse position
        startResizeX = e.clientX;
        startResizeY = e.clientY;
        
        // Add event listeners for resize
        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);
    }
}

function resize(e) {
    if (!isResizing || !currentResizeElement) return;
    
    e.preventDefault();
    
    // Calculate mouse movement
    const deltaX = e.clientX - startResizeX;
    const deltaY = e.clientY - startResizeY;
    
    let newWidth = originalWidth;
    let newHeight = originalHeight;
    let newLeft = currentResizeElement.offsetLeft;
    let newTop = currentResizeElement.offsetTop;
    
    // Resize based on which handle is being dragged
    if (currentResizeHandle.includes('e')) {
        newWidth = originalWidth + deltaX;
    }
    if (currentResizeHandle.includes('w')) {
        newWidth = originalWidth - deltaX;
        newLeft = originalLeft + deltaX;
    }
    if (currentResizeHandle.includes('s')) {
        newHeight = originalHeight + deltaY;
    }
    if (currentResizeHandle.includes('n')) {
        newHeight = originalHeight - deltaY;
        newTop = originalTop + deltaY;
    }
    
    // Apply minimum size
    newWidth = Math.max(30, newWidth);
    newHeight = Math.max(30, newHeight);
    
    // Apply the new size and position
    currentResizeElement.style.width = `${newWidth}px`;
    currentResizeElement.style.height = `${newHeight}px`;
    currentResizeElement.style.left = `${newLeft}px`;
    currentResizeElement.style.top = `${newTop}px`;
    
    // Update status bar
    updateStatusBar(`Resizing: ${Math.round(newWidth)} × ${Math.round(newHeight)}`);
}

function stopResize() {
    if (isResizing) {
        isResizing = false;
        currentResizeElement = null;
        currentResizeHandle = null;
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResize);
        
        // Save to history when resize ends
        saveToHistory();
    }
}

// Function to save current state to history
function saveToHistory() {
    // Get canvas content
    const canvasHTML = canvas.innerHTML;
    
    // If we're not at the end of history, truncate
    if (historyIndex < history.length - 1) {
        history = history.slice(0, historyIndex + 1);
    }
    
    // Add new state to history
    history.push(canvasHTML);
    
    // Trim history if too long
    if (history.length > 20) {
        history.shift();
    }
    
    // Update index to point to latest
    historyIndex = history.length - 1;
}

// Function to undo
function undo() {
    if (historyIndex > 0) {
        historyIndex--;
        canvas.innerHTML = history[historyIndex];
        showToast('Undo');
        
        // Reattach event listeners
        reattachEventListeners();
        
        // Clear selection
        selectedElement = null;
        updateStatusBar();
    } else {
        showToast('Nothing to undo');
    }
}

// Function to redo
function redo() {
    if (historyIndex < history.length - 1) {
        historyIndex++;
        canvas.innerHTML = history[historyIndex];
        showToast('Redo');
        
        // Reattach event listeners
        reattachEventListeners();
        
        // Clear selection
        selectedElement = null;
        updateStatusBar();
    } else {
        showToast('Nothing to redo');
    }
}

// Reattach event listeners after undo/redo
function reattachEventListeners() {
    // Reattach to all elements
    document.querySelectorAll('.draggable-element, .drawing-element, .text-element').forEach(element => {
        element.style.pointerEvents = 'all';
        
        // Special handling for arrow elements
        if (element.dataset.tool === 'arrow') {
            const svg = element.querySelector('svg');
            if (svg) {
                // Ensure it has a click area
                if (!svg.querySelector('rect[pointer-events="all"]')) {
                    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                    rect.setAttribute("x", "0");
                    rect.setAttribute("y", "0");
                    rect.setAttribute("width", "100%");
                    rect.setAttribute("height", "100%");
                    rect.setAttribute("fill", "transparent");
                    rect.setAttribute("stroke", "transparent");
                    rect.setAttribute("pointer-events", "all");
                    svg.appendChild(rect);
                }
            }
        }
        
        // Add standard event listeners
        element.addEventListener('mousedown', startDrag);
        element.addEventListener('click', (e) => {
            selectElement(element);
            e.stopPropagation();
        });
        
        // Add right-click delete
        element.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            selectElement(element);
            
            // Show a confirmation or directly delete
            const confirmDelete = confirm('Delete this element?');
            if (confirmDelete) {
                const elementToRemove = selectedElement;
                deselectElement();
                elementToRemove.remove();
                updateStatusBar();
                saveToHistory();
                showToast('Element deleted');
            }
        });
    });
}

// Clear the canvas of all elements
function clearCanvas() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    selectedElement = null;
    updateStatusBar();
    saveToHistory();
}

// Function to handle menu actions
function handleMenuAction(action) {
    switch (action) {
        case 'new':
            if (confirm('Create a new project? Unsaved changes will be lost.')) {
                clearCanvas();
                showToast('New project created');
            }
            break;
        case 'save':
            saveProject();
            break;
        case 'saveas':
            saveProjectAs();
            break;
        case 'open':
            openProject();
            break;
        case 'export-png':
            exportAsPNG();
            break;
        case 'export-pdf':
            showToast('PDF export not implemented in this version');
            break;
        case 'delete':
            if (selectedElement) {
                selectedElement.remove();
                selectedElement = null;
                updateStatusBar();
                saveToHistory();
                showToast('Element deleted');
            } else {
                showToast('Nothing selected to delete');
            }
            break;
        case 'zoom-in':
            zoomCanvas(0.1);
            break;
        case 'zoom-out':
            zoomCanvas(-0.1);
            break;
        case 'fit-screen':
            resetZoom();
            break;
        case 'show-grid':
            toggleGrid();
            break;
        case 'undo':
            undo();
            break;
        case 'redo':
            redo();
            break;
        default:
            showToast(`Action: ${action} not implemented yet`);
    }
}

// Function to zoom canvas
function zoomCanvas(amount) {
    canvasScale = Math.max(0.5, Math.min(3, canvasScale + amount));
    canvas.style.transform = `scale(${canvasScale})`;
    canvas.style.transformOrigin = 'center center';
    showToast(`Zoom: ${Math.round(canvasScale * 100)}%`);
    updateStatusBar();
}

// Function to reset zoom
function resetZoom() {
    canvasScale = 1;
    canvas.style.transform = 'scale(1)';
    showToast('Zoom reset to 100%');
    updateStatusBar();
}

// Function to toggle grid
function toggleGrid() {
    canvas.classList.toggle('show-grid');
    showToast(canvas.classList.contains('show-grid') ? 'Grid shown' : 'Grid hidden');
}

// Function to apply a template
function applyTemplate(templateId) {
    if (templates[templateId]) {
        if (confirm(`Apply the ${templates[templateId].name}? Current content will be replaced.`)) {
            clearCanvas();
            
            // Add each element from the template
            templates[templateId].elements.forEach(elem => {
                if (elem.type === 'text') {
                    const textElem = document.createElement('div');
                    elementCounter++;
                    textElem.className = 'text-element';
                    textElem.id = `element-${elementCounter}`;
                    textElem.textContent = elem.content;
                    textElem.style.cssText = elem.style;
                    textElem.style.left = elem.x + 'px';
                    textElem.style.top = elem.y + 'px';
                    textElem.dataset.tool = 'text';
                    
                    // Add event listeners
                    textElem.addEventListener('mousedown', startDrag);
                    textElem.addEventListener('click', (e) => {
                        selectElement(textElem);
                        e.stopPropagation();
                    });
                    
                    canvas.appendChild(textElem);
                } else {
                    addElement(elem.x, elem.y, elem.type);
                }
            });
            
            saveToHistory();
            showToast(`Applied ${templates[templateId].name}`);
        }
    } else {
        showToast(`Template not found`);
    }
}

// Function to export canvas as PNG
function exportAsPNG() {
    // Hide selection outline temporarily
    if (selectedElement) {
        selectedElement.style.outline = 'none';
    }
    
    // Use html2canvas library if available
    if (typeof html2canvas !== 'undefined') {
        html2canvas(canvas).then(function(canvas) {
            const link = document.createElement('a');
            link.download = 'scicanvas-export.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
            
            // Restore selection outline
            if (selectedElement) {
                selectedElement.style.outline = '2px solid var(--primary-color)';
            }
            
            showToast('Exported as PNG');
        });
    } else {
        // Fallback message if html2canvas is not available
        const fallbackMsg = document.createElement('div');
        fallbackMsg.style.position = 'fixed';
        fallbackMsg.style.top = '50%';
        fallbackMsg.style.left = '50%';
        fallbackMsg.style.transform = 'translate(-50%, -50%)';
        fallbackMsg.style.padding = '20px';
        fallbackMsg.style.background = 'white';
        fallbackMsg.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
        fallbackMsg.style.zIndex = '1000';
        fallbackMsg.innerHTML = `
            <p>To export as PNG, the html2canvas library is required.</p>
            <p>Add this to your HTML:</p>
            <pre>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"&gt;&lt;/script&gt;</pre>
            <button id="close-msg" style="margin-top: 10px; padding: 5px 10px;">OK</button>
        `;
        document.body.appendChild(fallbackMsg);
        
        document.getElementById('close-msg').addEventListener('click', () => {
            document.body.removeChild(fallbackMsg);
            // Restore selection outline
            if (selectedElement) {
                selectedElement.style.outline = '2px solid var(--primary-color)';
            }
        });
    }
}

// Function to save project (simplified without actual file saving)
function saveProject() {
    // In a real app, this would save to a server or local storage
    localStorage.setItem('scicanvas-project', canvas.innerHTML);
    showToast('Project saved to local storage');
}

// Function to save project with a new name (simplified)
function saveProjectAs() {
    // In a real app, this would prompt for a filename
    const projectName = prompt('Enter project name:', 'scicanvas-project');
    if (projectName) {
        localStorage.setItem(`scicanvas-${projectName}`, canvas.innerHTML);
        showToast(`Project saved as "${projectName}"`);
    }
}

// Function to open a project (simplified)
function openProject() {
    // In a real app, this would load from a server or file
    const projectData = localStorage.getItem('scicanvas-project');
    if (projectData) {
        if (confirm('Load saved project? Current changes will be lost.')) {
            canvas.innerHTML = projectData;
            reattachEventListeners();
            saveToHistory();
            showToast('Project loaded from local storage');
        }
    } else {
        showToast('No saved project found');
    }
}

// Show toast notification
function showToast(message, duration = 2000) {
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// Update status bar
function updateStatusBar(message) {
    if (message) {
        statusBar.textContent = message;
    } else if (selectedElement) {
        const rect = selectedElement.getBoundingClientRect();
        statusBar.textContent = `Selected: ${selectedElement.dataset.tool} | Size: ${Math.round(rect.width)} × ${Math.round(rect.height)} px`;
    } else {
        statusBar.textContent = `Ready | Canvas: ${canvas.clientWidth} × ${canvas.clientHeight} px | Selected: None`;
    }
}

// Add tool for text
document.addEventListener('DOMContentLoaded', () => {
    // Add text tool to sidebar
    const sidebar = document.querySelector('.sidebar');
    const textBtn = document.createElement('button');
    textBtn.className = 'sidebar-btn';
    textBtn.dataset.tool = 'text';
    textBtn.innerHTML = `
        <svg viewBox="0 0 24 24">
            <path d="M5 4v3h5.5v12h3V7H19V4H5z"/>
        </svg>
    `;
    sidebar.appendChild(textBtn);
    
    // Add event listener
    textBtn.addEventListener('click', () => {
        document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
        textBtn.classList.add('active');
        currentTool = 'text';
        updateStatusBar();
    });
    
    // Initialize the app
    init();
});

// Drawing functions
function startDrawing(e) {
    if (['line', 'arrow', 'rectangle', 'circle'].includes(currentTool)) {
        isDrawing = true;
        
        // Get canvas position
        const rect = canvas.getBoundingClientRect();
        startX = (e.clientX - rect.left) / canvasScale;
        startY = (e.clientY - rect.top) / canvasScale;
        
        // Create drawing element
        elementCounter++;
        drawingElement = document.createElement('div');
        drawingElement.className = 'drawing-element';
        drawingElement.id = `element-${elementCounter}`;
        drawingElement.dataset.tool = currentTool;
        
        // Add SVG container based on tool type
        const svgContent = createSVGForDrawing(currentTool, 0, 0);
        drawingElement.innerHTML = svgContent;
        
        // Set color
        applySVGColor(drawingElement, currentColor);
        
        // Set initial position
        drawingElement.style.left = startX + 'px';
        drawingElement.style.top = startY + 'px';
        
        // Add to canvas
        canvas.appendChild(drawingElement);
        
        // Prevent standard drag behavior
        e.preventDefault();
    }
}

function draw(e) {
    if (isDrawing && drawingElement) {
        // Get canvas position
        const rect = canvas.getBoundingClientRect();
        const currentX = (e.clientX - rect.left) / canvasScale;
        const currentY = (e.clientY - rect.top) / canvasScale;
        
        // Calculate width and height
        const width = Math.abs(currentX - startX);
        const height = Math.abs(currentY - startY);
        
        // Determine direction
        const left = Math.min(currentX, startX);
        const top = Math.min(currentY, startY);
        
        // Update element position
        drawingElement.style.left = left + 'px';
        drawingElement.style.top = top + 'px';
        
        // Update SVG based on tool type
        updateDrawingSVG(drawingElement, currentTool, width, height, currentX > startX, currentY > startY);
        
        // Update status
        updateStatusBar(`Drawing ${currentTool}: ${Math.round(width)} × ${Math.round(height)} px`);
        
        // Prevent standard drag behavior
        e.preventDefault();
    }
}

function stopDrawing() {
    if (isDrawing) {
        isDrawing = false;
        
        // Add event handlers to the drawing element
        if (drawingElement) {
            // Make it properly interactive
            drawingElement.style.pointerEvents = 'all';
            
            // Special handling for arrows to ensure they're clickable
            if (drawingElement.dataset.tool === 'arrow') {
                // Make sure the invisible hit area is working
                const svg = drawingElement.querySelector('svg');
                if (svg) {
                    // Add a transparent overlay if not exists
                    if (!svg.querySelector('rect[pointer-events="all"]')) {
                        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                        rect.setAttribute("x", "0");
                        rect.setAttribute("y", "0");
                        rect.setAttribute("width", "100%");
                        rect.setAttribute("height", "100%");
                        rect.setAttribute("fill", "transparent");
                        rect.setAttribute("stroke", "transparent");
                        rect.setAttribute("pointer-events", "all");
                        svg.appendChild(rect);
                    }
                }
            }
            
            drawingElement.addEventListener('mousedown', startDrag);
            drawingElement.addEventListener('click', (e) => {
                selectElement(drawingElement);
                e.stopPropagation();
            });
            
            // Add right-click context menu for delete
            drawingElement.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                selectElement(drawingElement);
                
                // Show a confirmation or directly delete
                const confirmDelete = confirm('Delete this element?');
                if (confirmDelete) {
                    const elementToRemove = selectedElement;
                    deselectElement();
                    elementToRemove.remove();
                    updateStatusBar();
                    saveToHistory();
                    showToast('Element deleted');
                }
            });
            
            // Select the new element
            selectElement(drawingElement);
            drawingElement = null;
            
            // Save state
            saveToHistory();
        }
    }
}

function createSVGForDrawing(tool, width, height) {
    // Default minimal sizes
    const w = Math.max(width, 10);
    const h = Math.max(height, 10);
    
    // Create unique ID for markers
    const markerId = `arrowhead-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    
    switch (tool) {
        case 'line':
            return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="100%">
                      <line x1="0" y1="0" x2="${w}" y2="${h}" stroke="${currentColor}" stroke-width="2" />
                    </svg>`;
        case 'arrow':
            return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <marker id="${markerId}" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="${currentColor}"/>
                        </marker>
                      </defs>
                      <line x1="0" y1="0" x2="${w-10}" y2="${h-10}" stroke="${currentColor}" stroke-width="2" 
                            marker-end="url(#${markerId})"/>
                    </svg>`;
        case 'rectangle':
            return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="100%">
                      <rect x="0" y="0" width="${w}" height="${h}" stroke="${currentColor}" stroke-width="2" fill="none" />
                    </svg>`;
        case 'circle':
            return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="100%">
                      <ellipse cx="${w/2}" cy="${h/2}" rx="${w/2}" ry="${h/2}" stroke="${currentColor}" 
                               stroke-width="2" fill="none" />
                    </svg>`;
        default:
            return '';
    }
}

function updateDrawingSVG(element, tool, width, height, isRightDirection, isDownDirection) {
    const w = Math.max(width, 10);
    const h = Math.max(height, 10);
    
    const svg = element.querySelector('svg');
    if (!svg) return;
    
    // Update viewBox
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    
    // Update element dimensions
    element.style.width = `${w}px`;
    element.style.height = `${h}px`;
    
    // Update shape based on tool
    switch (tool) {
        case 'line':
            const line = svg.querySelector('line');
            if (line) {
                if (isRightDirection && isDownDirection) {
                    line.setAttribute('x1', '0');
                    line.setAttribute('y1', '0');
                    line.setAttribute('x2', w);
                    line.setAttribute('y2', h);
                } else if (!isRightDirection && isDownDirection) {
                    line.setAttribute('x1', w);
                    line.setAttribute('y1', '0');
                    line.setAttribute('x2', '0');
                    line.setAttribute('y2', h);
                } else if (isRightDirection && !isDownDirection) {
                    line.setAttribute('x1', '0');
                    line.setAttribute('y1', h);
                    line.setAttribute('x2', w);
                    line.setAttribute('y2', '0');
                } else {
                    line.setAttribute('x1', w);
                    line.setAttribute('y1', h);
                    line.setAttribute('x2', '0');
                    line.setAttribute('y2', '0');
                }
            }
            break;
        case 'arrow':
            const arrow = svg.querySelector('line');
            if (arrow) {
                // Adjust endpoint to prevent overlap with arrowhead
                const endAdjust = 10;
                if (isRightDirection && isDownDirection) {
                    arrow.setAttribute('x1', '0');
                    arrow.setAttribute('y1', '0');
                    arrow.setAttribute('x2', w-endAdjust);
                    arrow.setAttribute('y2', h-endAdjust);
                } else if (!isRightDirection && isDownDirection) {
                    arrow.setAttribute('x1', w);
                    arrow.setAttribute('y1', '0');
                    arrow.setAttribute('x2', endAdjust);
                    arrow.setAttribute('y2', h-endAdjust);
                } else if (isRightDirection && !isDownDirection) {
                    arrow.setAttribute('x1', '0');
                    arrow.setAttribute('y1', h);
                    arrow.setAttribute('x2', w-endAdjust);
                    arrow.setAttribute('y2', endAdjust);
                } else {
                    arrow.setAttribute('x1', w);
                    arrow.setAttribute('y1', h);
                    arrow.setAttribute('x2', endAdjust);
                    arrow.setAttribute('y2', endAdjust);
                }
                
                // Update marker - ensure it's using current color and has correct orientation
                const marker = svg.querySelector('marker');
                if (marker) {
                    let orient = "auto";
                    if (!isRightDirection) {
                        orient = "auto-start-reverse";
                    }
                    marker.setAttribute('orient', orient);
                    
                    // Make sure the polygon fill is the same as the line
                    const polygon = marker.querySelector('polygon');
                    if (polygon) {
                        polygon.setAttribute('fill', arrow.getAttribute('stroke'));
                    }
                }
            }
            break;
        case 'rectangle':
            const rect = svg.querySelector('rect');
            if (rect) {
                rect.setAttribute('width', w);
                rect.setAttribute('height', h);
            }
            break;
        case 'circle':
            const ellipse = svg.querySelector('ellipse');
            if (ellipse) {
                ellipse.setAttribute('cx', w/2);
                ellipse.setAttribute('cy', h/2);
                ellipse.setAttribute('rx', w/2);
                ellipse.setAttribute('ry', h/2);
            }
            break;
    }
}
