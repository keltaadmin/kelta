param(
    [Parameter(Mandatory=$true)]
    [string]$File
)

$Root = "D:\KELTA"
$Audit = Join-Path $Root "Audit"

New-Item -ItemType Directory -Force -Path $Audit | Out-Null

if(!(Test-Path $File))
{
    Write-Host ""
    Write-Host "File not found:" -ForegroundColor Red
    Write-Host $File
    exit
}

$Info = Get-Item $File

$Name = $Info.BaseName

$Output = Join-Path $Audit "$Name.txt"

"==============================================================" | Set-Content $Output
"KELTA Enterprise Audit Export"
"Generated : $(Get-Date)" | Add-Content $Output
"File      : $File" | Add-Content $Output
"Size      : $([math]::Round($Info.Length/1KB,2)) KB" | Add-Content $Output
"Lines     : $((Get-Content $File).Count)" | Add-Content $Output
"==============================================================" | Add-Content $Output
"" | Add-Content $Output

Get-Content $File | Add-Content $Output

Write-Host ""
Write-Host "Export Complete" -ForegroundColor Green
Write-Host ""
Write-Host $Output
