const fs = require('fs');
const path = require('path');

// Check for CSS import case sensitivity issues
function checkCSSImports() {
  const pagesDir = path.join(__dirname, '../src/pages');
  const files = fs.readdirSync(pagesDir);
  
  let hasErrors = false;
  
  files.forEach(file => {
    if (file.endsWith('.jsx')) {
      const filePath = path.join(pagesDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for CSS imports
      const cssImports = content.match(/import\s+['"]([^'"]*\.css)['"]/g);
      
      if (cssImports) {
        cssImports.forEach(importStatement => {
          const cssPath = importStatement.match(/['"]([^'"]*\.css)['"]/)[1];
          
          if (cssPath.startsWith('./')) {
            const expectedCSSFile = path.join(path.dirname(filePath), cssPath.substring(2));
            const actualCSSFile = path.join(path.dirname(filePath), path.basename(cssPath));
            
            // Check if the CSS file exists with the exact case
            if (!fs.existsSync(expectedCSSFile)) {
              // Try to find the actual CSS file with different case
              const dir = path.dirname(expectedCSSFile);
              const baseName = path.basename(expectedCSSFile);
              const actualFiles = fs.readdirSync(dir);
              const actualFile = actualFiles.find(f => f.toLowerCase() === baseName.toLowerCase());
              
              if (actualFile && actualFile !== baseName) {
                console.error(`❌ Case sensitivity error in ${file}:`);
                console.error(`   Import: ${cssPath}`);
                console.error(`   Expected: ${baseName}`);
                console.error(`   Actual: ${actualFile}`);
                console.error(`   Fix: Change import to './${actualFile}'`);
                console.error('');
                hasErrors = true;
              }
            }
          }
        });
      }
    }
  });
  
  if (hasErrors) {
    console.error('🚨 CSS import case sensitivity errors found!');
    console.error('Please fix the above errors before building.');
    process.exit(1);
  } else {
    console.log('✅ No CSS import case sensitivity issues found.');
  }
}

checkCSSImports(); 