# ============================================================
#  AUTO DEPLOY - KUA Website
#  Otomatis push ke GitHub & deploy ke Cloudflare Pages
# ============================================================

param(
    [string]$CommitMessage = "update: auto deploy $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
)

$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  KUA WEBSITE - AUTO DEPLOY SCRIPT" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# ---- STEP 1: Build dist folder ----
Write-Host "[1/4] Membangun folder dist..." -ForegroundColor Yellow

if (Test-Path "dist") {
    Remove-Item -Recurse -Force "dist"
}
New-Item -ItemType Directory -Path "dist" | Out-Null

# Copy semua file statis ke dist/
$filesToCopy = @("index.html", "styles.css", "app.js", "batik-pattern.jpg")
foreach ($file in $filesToCopy) {
    if (Test-Path $file) {
        Copy-Item $file "dist\" -Force
        Write-Host "   OK Copied: $file" -ForegroundColor Green
    } else {
        Write-Host "   WARN File tidak ditemukan: $file" -ForegroundColor Red
    }
}

Write-Host ""

# ---- STEP 2: Git Add ----
Write-Host "[2/4] Menambahkan perubahan ke Git..." -ForegroundColor Yellow
git add -A
Write-Host "   OK Git add selesai" -ForegroundColor Green
Write-Host ""

# ---- STEP 3: Git Commit ----
Write-Host "[3/4] Commit ke Git..." -ForegroundColor Yellow
$status = git status --porcelain
if ($status) {
    git commit -m $CommitMessage
    Write-Host "   OK Commit: $CommitMessage" -ForegroundColor Green
} else {
    Write-Host "   INFO Tidak ada perubahan untuk di-commit" -ForegroundColor Gray
}
Write-Host ""

# ---- STEP 4: Git Push ke GitHub ----
Write-Host "[4/4] Push ke GitHub..." -ForegroundColor Yellow
git push origin main
Write-Host "   OK Push ke GitHub berhasil!" -ForegroundColor Green
Write-Host ""

# ---- SELESAI ----
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  DEPLOY SELESAI!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  GitHub : https://github.com/anns67/Website-KUA-" -ForegroundColor White
Write-Host "  Website: https://anns67.github.io/Website-KUA-/" -ForegroundColor White
Write-Host ""
Write-Host "  Cloudflare Pages akan otomatis deploy" -ForegroundColor Gray
Write-Host "  setelah GitHub menerima push ini." -ForegroundColor Gray
Write-Host ""
