<#
===============================================================
KELTA Enterprise Platform
Audit Toolkit

Script  : verify-repository.ps1
Version : 0.1.0

Purpose :
Performs a basic repository health verification.

===============================================================
#>

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

# Import shared functions
. "$PSScriptRoot\common.ps1"

Write-KeltaHeader "Repository Verification"

$RepositoryRoot = Resolve-Path "$PSScriptRoot\..\.."

Write-KeltaInfo "Repository : $RepositoryRoot"
Write-KeltaInfo "Date       : $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

Write-KeltaSection "Folder Verification"

$RequiredFolders = @(
    "apps",
    "database",
    "docs",
    "tools",
    "Asset",
    "ProjectControl"
)

$MissingFolders = @()

foreach ($Folder in $RequiredFolders) {

    $Path = Join-Path $RepositoryRoot $Folder

    if (Test-Path $Path) {
        Write-KeltaSuccess $Folder
    }
    else {
        Write-KeltaError "$Folder (Missing)"
        $MissingFolders += $Folder
    }
}

Write-KeltaSection "Empty Source Files"

$EmptyFiles = Get-ChildItem $RepositoryRoot -Recurse -File |
Where-Object {

    $_.Extension -in ".ts",".tsx",".js",".jsx" -and
    $_.Length -eq 0 -and
    $_.FullName -notmatch "\\node_modules\\" -and
    $_.FullName -notmatch "\\.next\\" -and
    $_.FullName -notmatch "\\dist\\" -and
    $_.FullName -notmatch "\\coverage\\" -and
    $_.FullName -notmatch "\\.turbo\\"

}

Write-KeltaInfo "Empty source files found : $($EmptyFiles.Count)"

Write-KeltaSection "Generating Report"

$ReportFolder = Join-Path $RepositoryRoot "Asset\Reports\Repository"

New-Item -ItemType Directory -Force $ReportFolder | Out-Null

$Report = Join-Path $ReportFolder "RepositoryHealth.md"

@"
# KELTA Repository Health Report

Generated:
$(Get-Date)

## Folder Verification

Missing folders: $($MissingFolders.Count)

## Empty Source Files

$($EmptyFiles.Count)

## Status

Repository verification completed successfully.

"@ | Set-Content $Report

Write-KeltaSuccess "Report created"

Write-KeltaInfo $Report

Write-KeltaBlank

if ($MissingFolders.Count -eq 0) {
    Write-KeltaSuccess "Repository Health : PASS"
    exit 0
}
else {
    Write-KeltaWarning "Repository Health : WARNING"
    exit 1
}