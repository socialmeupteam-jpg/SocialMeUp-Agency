const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'Footer', 'Footer.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Normalize line endings to \n
content = content.replace(/\r\n/g, '\n');

// Add missing closing </div> for .company div
content = content.replace(
  '<a href="#"><FaYoutube /></a>\n            </div>\n\n          <div>\n            <h4>Company</h4>',
  '<a href="#"><FaYoutube /></a>\n            </div>\n          </div>\n\n          <div>\n            <h4>Company</h4>'
);

// Add missing closing </div> for .grid div
content = content.replace(
  '<p>info@socialmeup.in</p>\n          </div>\n\n        <div className={styles.bottom}>',
  '<p>info@socialmeup.in</p>\n          </div>\n        </div>\n\n        <div className={styles.bottom}>'
);

// Add missing closing </div> for .container div
content = content.replace(
  '</div>\n    </footer>',
  '</div>\n      </div>\n    </footer>'
);

// Restore Windows line endings
content = content.replace(/\n/g, '\r\n');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Footer.tsx fixed successfully!');
