function copyEmailToClipBoard(targetClass, elementID, originalLinkClass, originalLinkContent)
{
  // copy to clipboard
  var clipboard = new Clipboard(targetClass);

  // if the copy succeeded
  clipboard.on('success', function(event) {
    // temporarily change the content and appearance of the thing the user clicked on
    var email = document.getElementById(elementID);
    email.className = "email-coppied-confirmation";
    event.clearSelection();
    event.trigger.textContent = 'Copied to clipboard';
    // then, after a timeout, set it back to it's original content and appearance
    window.setTimeout(function() {
        email.className = originalLinkClass;
        event.trigger.textContent = originalLinkContent;
    }, 2000);
  });
}
