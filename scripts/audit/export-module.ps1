<#
KELTA Enterprise Audit Export Tool
Version : 1.0
Purpose : Export one module's source code into a single review file.
Usage   :
    .\export-module.ps1 auth
    .\export-module.ps1 users
    .\export-module.ps1 prisma
    .\export-module.ps1 membership
#>

param(
    [Parameter(Mandatory = $true)]
    [string]$Module
)

$Root = "D:\KELTA"

$ModuleMap = @{
    "auth"         = "apps\api\src\auth"
    "users"        = "apps\api\src\users"
    "roles"        = "apps\api\src\roles"
    "permissions"  = "apps\api\src\permissions"
    "membership"   = "apps\api\src\membership"
    "organization" = "apps\api\src\organization"
    "workflow"     = "apps\api\src\workflow"
    "meetings"     = "apps\api\src\meetings"
    "documents"    = "apps\api\src\documents"
    "notifications"= "apps\api\src\notifications"
    "finance"      = "apps\api\src\finance"
    "common"       = "apps\api\src\common"
    "prisma"       = "apps\api\prisma"
}

if (-not $ModuleMap.ContainsKey($Module.ToLower())) {
    Write-Host ""
    Write-Host "Unknown module: $Module" -ForegroundColor Red
    Write-Host ""
    Write-Host "Available modules:"
    $ModuleMap.Keys | Sort-Object | ForEach-Object { Write-Host " - $_" }
    exit
}

$Source = Join-Path $Root $ModuleMap[$Module.ToLower()]
$AuditFolder = Join-Path $Root "Audit"

New-Item -ItemType Directory -Force -Path $AuditFolder | Out-Null

$Output = Join-Path $AuditFolder "$Module.txt"

"==============================================================" | Set-Content $Output
"KELTA Enterprise Audit Export" | Add-Content $Output
"Module : $Module" | Add-Content $Output
"Generated : $(Get-Date)" | Add-Content $Output
"==============================================================" | Add-Content $Output
"" | Add-Content $Output

if (!(Test-Path $Source)) {
    Write-Host ""
    Write-Host "Folder not found:" -ForegroundColor Red
    Write-Host $Source
    exit
}

$Files = Get-ChildItem $Source -File -Recurse |
    Sort-Object FullName

foreach ($File in $Files)
{
    Add-Content $Output ""
    Add-Content $Output "##############################################################"
    Add-Content $Output "FILE:"
    Add-Content $Output $File.FullName
    Add-Content $Output "##############################################################"
    Add-Content $Output ""

    Get-Content $File.FullName | Add-Content $Output

    Add-Content $Output ""
}

Write-Host ""
Write-Host "Export completed." -ForegroundColor Green
Write-Host ""
Write-Host "Output:"
Write-Host $Output
Write-Host ""
Write-Host "Files Exported: $($Files.Count)"
