# ==========================================
# PR-0002 Step 01
# Create Identity Infrastructure files
# ==========================================

$Root = "D:\KELTA\apps\api\src\auth"

$Files = @(
"$Root\config\auth.config.ts",
"$Root\config\supabase.config.ts",
"$Root\config\validate-env.ts",

"$Root\decorators\current-user.decorator.ts",
"$Root\decorators\public.decorator.ts",

"$Root\dto\auth-user.dto.ts",
"$Root\dto\login.dto.ts",
"$Root\dto\refresh.dto.ts",

"$Root\services\supabase-auth.service.ts",
"$Root\services\auth-sync.service.ts",

"$Root\guards\jwt-auth.guard.ts",

"$Root\strategies\supabase.strategy.ts"
)

foreach($File in $Files){

    if(!(Test-Path $File)){
        New-Item -ItemType File $File | Out-Null
        Write-Host "Created $File" -ForegroundColor Green
    }
    else{
        Write-Host "Exists  $File" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "PR-0002 Step01 Complete" -ForegroundColor Cyan
