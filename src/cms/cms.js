import CMS from 'netlify-cms'

import HomePagePreview from './preview-templates/HomePagePreview'
import NormalPagePreview from './preview-templates/NormalPagePreview'
// import BlogPagePreview from './preview-templates/BlogPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('normal', NormalPagePreview)
// CMS.registerPreviewTemplate('blog', BlogPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
