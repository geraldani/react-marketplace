import {
  FaRegFilePdf as IconPdf,
  FaRegFileWord as IconWord,
  FaRegFileArchive as IconZip,
  FaRegFileAlt as IconText,
  FaRegFileExcel as IconExcel,
  FaRegFilePowerpoint as IconPowerPoint,
  FaRegFileCode as IconCode,
  FaFont as IconFont
} from 'react-icons/fa'

/*const initExtension = (v, icon) => v.forEach(s => extensions[s] = icon)
 const extensions = {}
 [[],[],[]].forEach(v => )
 ['txt', 'text', 'dat', 'rtf'].forEach(s => extensions[s] = IconText);
 const textExtensions = ['txt', 'text', 'dat', 'rtf'];
 const wordExtensions = ['doc', 'docx', 'dot', 'dotx', 'docm', 'dotx', 'dotm', 'odt'];
 const calculusExtensions = ['ods', 'xls', 'xlw', 'xlt', 'xml', 'xlsx', 'xlsm', 'xlts', 'xltm']
 const presentationExtensions = ['odp', 'ppt', 'pot', 'pptx', 'pptm', 'potx', 'potm']
 const codeExtensions = ['java', 'js', 'json', 'jsx', 'html']
 const zipExtensions = ['zip', 'rar', 'gz', 'gzip', '7z', 'xz']
 const fontExtensions = ['eot', 'ttf', 'woff', 'otf']
 const pdfExtension = 'pdf'*/
// IconRender = extensions[fileExtension]
/*  if(textExtensions.includes(fileExtension)) IconRender = IconText
  else if(wordExtensions.includes(fileExtension)) IconRender = IconWord
  else if(calculusExtensions.includes(fileExtension)) IconRender = IconExcel
  else if(presentationExtensions.includes(fileExtension)) IconRender = IconPowerPoint
  else if(codeExtensions.includes(fileExtension)) IconRender = IconCode
  else if(zipExtensions.includes(fileExtension)) IconRender = IconZip
  else if(fontExtensions.includes(fileExtension)) IconRender = IconFont
  else if(fileExtension === pdfExtension) IconRender = IconPdf
  else IconRender = IconFile*/

export const extensionsFileIcon = [
  { values: ['txt', 'text', 'rtf'], icon: IconText },
  { values: ['doc', 'docx', 'dot', 'dotx', 'docm', 'dotx', 'dotm', 'odt'], icon: IconWord },
  { values: ['ods', 'xls', 'xlw', 'xlt', 'xml', 'xlsx', 'xlsm', 'xlts', 'xltm'], icon: IconExcel },
  { values: ['odp', 'ppt', 'pot', 'pptx', 'pptm', 'potx', 'potm'], icon: IconPowerPoint },
  { values: ['java', 'js', 'json', 'jsx', 'html'], icon: IconCode },
  { values: ['zip', 'rar', 'gz', 'gzip', '7z', 'xz'], icon: IconZip },
  { values: ['eot', 'ttf', 'woff', 'otf'], icon: IconFont },
  { values: ['pdf'], icon: IconPdf }
]
