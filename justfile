# tripplannerweb — GitHub Pages site served from docs/

src := "../ai_travel_planner/applications/website"
dst := "docs"

# List recipes
default:
    @just --list

# Copy site from source repo into docs/ (mirror, drop junk)
sync:
    rsync -av --delete \
      --exclude='.DS_Store' \
      --exclude='.git' \
      --exclude='.gitignore' \
      {{src}}/ {{dst}}/
    @echo "Synced {{src}} -> {{dst}}"

# Sync then commit & push to publish
publish msg="Update site": sync
    git add {{dst}}
    git commit -m "{{msg}}"
    git push
