<#
===============================================================
KELTA Enterprise Platform
Audit Toolkit

File    : common.ps1
Version : 0.1.0

Purpose :
Shared helper functions used by all audit scripts.

===============================================================
#>

Set-StrictMode -Version Latest

function Write-KeltaHeader {
    param([string]$Title)

    Write-Host ""
    Write-Host "==================================================" -ForegroundColor Cyan
    Write-Host " KELTA Enterprise Platform" -ForegroundColor Cyan
    Write-Host " $Title" -ForegroundColor Cyan
    Write-Host "==================================================" -ForegroundColor Cyan
    Write-Host ""
}

function Write-KeltaInfo {
    param([string]$Message)

    Write-Host "[INFO ] $Message" -ForegroundColor White
}

function Write-KeltaSuccess {
    param([string]$Message)

    Write-Host "[ OK  ] $Message" -ForegroundColor Green
}

function Write-KeltaWarning {
    param([string]$Message)

    Write-Host "[WARN ] $Message" -ForegroundColor Yellow
}

function Write-KeltaError {
    param([string]$Message)

    Write-Host "[FAIL ] $Message" -ForegroundColor Red
}

function Write-KeltaSection {
    param([string]$Title)

    Write-Host ""
    Write-Host "---- $Title ----" -ForegroundColor Magenta
}

function Write-KeltaBlank {
    Write-Host ""
}