# Motion

Add motion when it explains state, navigation or direct manipulation; static content can stay static.

Prefer CSS for simple transitions and animate transform/opacity when appropriate. Keep interactions interruptible and avoid hiding useful server-rendered content until hydration. Respect `prefers-reduced-motion` and preserve keyboard behavior and focus.

Add a motion dependency only when the required behavior justifies it. Check the actual transition in a browser, including interruption and reduced motion, rather than inferring smoothness from source or screenshots.
