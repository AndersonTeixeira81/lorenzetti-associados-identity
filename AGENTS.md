<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep institutional identity and navigation in src/config/site.ts so verified information and the provisional name change in one place.
- Share the institutional shell and section components across file-based routes; content parent routes render Outlet and index leaves own page content.
- Keep the contact form client-only and non-transmitting until an official protected delivery integration and privacy details are confirmed.
- Render location with a standard Google Maps iframe and an address-based directions link, without API connectors.
