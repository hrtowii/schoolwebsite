import markdown
import re
selectedFile = input("Enter the exact path of the markdown file you would like to convert: ")
postTitle = input("Enter the title of the post: ")
fileTitle = postTitle.lower().replace(" ","-")
fileTitle = re.sub("[^a-z\-]", "", fileTitle)
try:
    print(selectedFile)
    with open(selectedFile,'r') as readfile:
        tempMd = readfile.read()
        
    html = markdown.markdown(tempMd)
    blogHTML = open('blog/' + fileTitle + '.html', 'w')
    template = open("blog/template1.txt", "r")
    
    with blogHTML as f:
        f.write(template.read())
        template.close()
        f.write(html)
        f.write("<div class=\"content\">")
        
    
except Exception as e:
    print(e)