Title: Validator
Slug: validator
Summary: Validate your SpaceAPI endpoint.
SortOrder: 10

<noscript>
  <h2>JavaScript required!</h2>
</noscript>

<form>
  <p>
    Validate URL:
    <input id="input_url" type="url" value="https://status.crdmp.ch/" />
    <input id="submit_validate_url" type="submit" value="Validate URL" />
  </p>

  <p>Paste your output here:</p>
  <textarea id="content"></textarea>
  <input id="submit_validate" type="submit" value="Validate">
</form>

<div id="banner">
  <pre id="OK">OK</pre>
  <pre id="ERROR">ERROR</pre>
  <pre id="processing">Processing request, please hold ...</pre>
  <pre id="fetching">Fetching data, please hold ...</pre>
</div>

<div>
  <h2>Log</h2>
  <pre id="log"></pre>
</div>

<div id="backup_iframe">
  <h2>Backup iFrame</h2>
  <p>iFrame points to: <pre></pre></p>
  <iframe src="#">This is the backup iFrame</iframe>
</div>


<script src="/js/validator.js"></script>
