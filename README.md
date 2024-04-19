# router-context-repro

This is a minimal repo case for a problem using the RouterContext to build navigation in ESNext Aurelia 2 apps with the `router-lite` router.

The code question is in `src/nav-bar.js`. When this runs, it fails to render the generated van bar, and in the console I get:

```
Error: AUR0009: Attempted to jitRegister something that is not a constructor: 'au:resource:value-converter:firstNonEmpty'. Did you forget to register this resource?
    at createMappedError (index.dev.mjs:85:49)
    at Container._jitRegister (index.dev.mjs:1175:19)
    at Container.get (index.dev.mjs:1013:41)
    at eval (index.dev.mjs:1900:22)
    at Resolver.resolve (index.dev.mjs:1774:20)
    at Container.get (index.dev.mjs:1001:24)
    at Object.get (index.dev.mjs:2103:34)
    at PropertyBinding.evaluatorGetConverter (index.dev.mjs:2214:52)
    at astBind (index.dev.mjs:1025:44)
    at PropertyBinding.bind (index.dev.mjs:2935:9)
```

I added some other stuff I tried, commented out.
