[CmdletBinding(SupportsShouldProcess = $true)]
param(
    [ValidateScript( { Test-Path (Split-Path $_ ) })][string]$OutPath = (Get-Location),
    [array]$Path = (Get-Location),
    [ValidateScript( { Test-Path $_ })]$Json = "..\..\Images.json"
)
New-Item -ItemType Directory $OutPath -ErrorAction SilentlyContinue
Get-ChildItem -Recurse $OutPath | Remove-Item -Recurse -Force

ConvertTo-OutputImages -WhatIf:$WhatIfPreference -Json $Json -Destination "Web" -OutPath $OutPath -Type Logo      -Path (Get-ChildItem -Path $Path -File -Recurse -Depth 0 -Include "*Logo.png","*Word.png")
ConvertTo-OutputImages -WhatIf:$WhatIfPreference -Json $Json -Destination "Web" -OutPath $OutPath -Type Brandmark -Path (Get-ChildItem -Path $Path -File -Recurse -Depth 0 -Include "*Brand.png","*Icon.png")
ConvertTo-OutputImages -WhatIf:$WhatIfPreference -Json $Json -Destination "Web" -OutPath $OutPath -Type Banner    -Path (Get-ChildItem -Path $Path -File -Recurse -Depth 0 -Include "*BG.jpg","*FG.jpg")