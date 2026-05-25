# Remove duplicate project image folders from root
Remove-Item -Recurse -Force "agroguard-ai" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "AI Quiz Platform" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "AI Recruitment System" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "ai-exam" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "AI-resume" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "food-waste" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "LegalRisk AI Platform" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "smart-hire" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "certificates" -ErrorAction SilentlyContinue

# Remove duplicate certificate and profile images from root
Remove-Item -Force "hackathon-certificate-1.jpg" -ErrorAction SilentlyContinue
Remove-Item -Force "hackathon-certificate-2.jpg" -ErrorAction SilentlyContinue
Remove-Item -Force "ijirt-publication-certificate.jpg" -ErrorAction SilentlyContinue
Remove-Item -Force "internship-offer-letter.jpg" -ErrorAction SilentlyContinue
Remove-Item -Force "internship-completion-certificate.png" -ErrorAction SilentlyContinue
Remove-Item -Force "profile.png" -ErrorAction SilentlyContinue

Write-Host "Cleanup completed! Duplicate files and folders removed."
