import { allowPreviousPlayerStylesMerge, balancePreviousStylesIntoKeyframes, copyStyles } from '../../util';
import { CssKeyframesDriver } from '../css_keyframes/css_keyframes_driver';
import { containsElement, invokeQuery, isBrowser, matchesElement, validateStyleProperty } from '../shared';
import { WebAnimationsPlayer } from './web_animations_player';
var WebAnimationsDriver = /** @class */ (function () {
    function WebAnimationsDriver() {
        this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(getElementAnimateFn().toString());
        this._cssKeyframesDriver = new CssKeyframesDriver();
    }
    WebAnimationsDriver.prototype.validateStyleProperty = function (prop) { return validateStyleProperty(prop); };
    WebAnimationsDriver.prototype.matchesElement = function (element, selector) {
        return matchesElement(element, selector);
    };
    WebAnimationsDriver.prototype.containsElement = function (elm1, elm2) { return containsElement(elm1, elm2); };
    WebAnimationsDriver.prototype.query = function (element, selector, multi) {
        return invokeQuery(element, selector, multi);
    };
    WebAnimationsDriver.prototype.computeStyle = function (element, prop, defaultValue) {
        return window.getComputedStyle(element)[prop];
    };
    WebAnimationsDriver.prototype.overrideWebAnimationsSupport = function (supported) { this._isNativeImpl = supported; };
    WebAnimationsDriver.prototype.animate = function (element, keyframes, duration, delay, easing, previousPlayers, scrubberAccessRequested) {
        if (previousPlayers === void 0) { previousPlayers = []; }
        var useKeyframes = !scrubberAccessRequested && !this._isNativeImpl;
        if (useKeyframes) {
            return this._cssKeyframesDriver.animate(element, keyframes, duration, delay, easing, previousPlayers);
        }
        var fill = delay == 0 ? 'both' : 'forwards';
        var playerOptions = { duration: duration, delay: delay, fill: fill };
        // we check for this to avoid having a null|undefined value be present
        // for the easing (which results in an error for certain browsers #9752)
        if (easing) {
            playerOptions['easing'] = easing;
        }
        var previousStyles = {};
        var previousWebAnimationPlayers = previousPlayers.filter(function (player) { return player instanceof WebAnimationsPlayer; });
        if (allowPreviousPlayerStylesMerge(duration, delay)) {
            previousWebAnimationPlayers.forEach(function (player) {
                var styles = player.currentSnapshot;
                Object.keys(styles).forEach(function (prop) { return previousStyles[prop] = styles[prop]; });
            });
        }
        keyframes = keyframes.map(function (styles) { return copyStyles(styles, false); });
        keyframes = balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles);
        return new WebAnimationsPlayer(element, keyframes, playerOptions);
    };
    return WebAnimationsDriver;
}());
export { WebAnimationsDriver };
export function supportsWebAnimations() {
    return typeof getElementAnimateFn() === 'function';
}
function getElementAnimateFn() {
    return (isBrowser() && Element.prototype['animate']) || {};
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViX2FuaW1hdGlvbnNfZHJpdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5pbWF0aW9ucy9icm93c2VyL3NyYy9yZW5kZXIvd2ViX2FuaW1hdGlvbnMvd2ViX2FuaW1hdGlvbnNfZHJpdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBLE9BQU8sRUFBQyw4QkFBOEIsRUFBRSxrQ0FBa0MsRUFBRSxVQUFVLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFFMUcsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDekUsT0FBTyxFQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUV6RyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUU1RDtJQUFBO1FBQ1Usa0JBQWEsR0FBRyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3JGLHdCQUFtQixHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztJQW9EekQsQ0FBQztJQWxEQyxtREFBcUIsR0FBckIsVUFBc0IsSUFBWSxJQUFhLE9BQU8scUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXBGLDRDQUFjLEdBQWQsVUFBZSxPQUFZLEVBQUUsUUFBZ0I7UUFDM0MsT0FBTyxjQUFjLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCw2Q0FBZSxHQUFmLFVBQWdCLElBQVMsRUFBRSxJQUFTLElBQWEsT0FBTyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV0RixtQ0FBSyxHQUFMLFVBQU0sT0FBWSxFQUFFLFFBQWdCLEVBQUUsS0FBYztRQUNsRCxPQUFPLFdBQVcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCwwQ0FBWSxHQUFaLFVBQWEsT0FBWSxFQUFFLElBQVksRUFBRSxZQUFxQjtRQUM1RCxPQUFRLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQVMsQ0FBQyxJQUFJLENBQVcsQ0FBQztJQUNuRSxDQUFDO0lBRUQsMERBQTRCLEdBQTVCLFVBQTZCLFNBQWtCLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBRXBGLHFDQUFPLEdBQVAsVUFDSSxPQUFZLEVBQUUsU0FBdUIsRUFBRSxRQUFnQixFQUFFLEtBQWEsRUFBRSxNQUFjLEVBQ3RGLGVBQXVDLEVBQUUsdUJBQWlDO1FBQTFFLGdDQUFBLEVBQUEsb0JBQXVDO1FBQ3pDLElBQU0sWUFBWSxHQUFHLENBQUMsdUJBQXVCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3JFLElBQUksWUFBWSxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FDbkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQztTQUNuRTtRQUVELElBQU0sSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQU0sYUFBYSxHQUFxQyxFQUFDLFFBQVEsVUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksTUFBQSxFQUFDLENBQUM7UUFDaEYsc0VBQXNFO1FBQ3RFLHdFQUF3RTtRQUN4RSxJQUFJLE1BQU0sRUFBRTtZQUNWLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7U0FDbEM7UUFFRCxJQUFNLGNBQWMsR0FBeUIsRUFBRSxDQUFDO1FBQ2hELElBQU0sMkJBQTJCLEdBQTBCLGVBQWUsQ0FBQyxNQUFNLENBQzdFLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxZQUFZLG1CQUFtQixFQUFyQyxDQUFxQyxDQUFDLENBQUM7UUFFckQsSUFBSSw4QkFBOEIsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDbkQsMkJBQTJCLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTTtnQkFDeEMsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQztnQkFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFuQyxDQUFtQyxDQUFDLENBQUM7WUFDM0UsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO1FBQy9ELFNBQVMsR0FBRyxrQ0FBa0MsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ25GLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUF0REQsSUFzREM7O0FBRUQsTUFBTTtJQUNKLE9BQU8sT0FBTyxtQkFBbUIsRUFBRSxLQUFLLFVBQVUsQ0FBQztBQUNyRCxDQUFDO0FBRUQ7SUFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLElBQVUsT0FBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNwRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtBbmltYXRpb25QbGF5ZXIsIMm1U3R5bGVEYXRhfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuaW1wb3J0IHthbGxvd1ByZXZpb3VzUGxheWVyU3R5bGVzTWVyZ2UsIGJhbGFuY2VQcmV2aW91c1N0eWxlc0ludG9LZXlmcmFtZXMsIGNvcHlTdHlsZXN9IGZyb20gJy4uLy4uL3V0aWwnO1xuaW1wb3J0IHtBbmltYXRpb25Ecml2ZXJ9IGZyb20gJy4uL2FuaW1hdGlvbl9kcml2ZXInO1xuaW1wb3J0IHtDc3NLZXlmcmFtZXNEcml2ZXJ9IGZyb20gJy4uL2Nzc19rZXlmcmFtZXMvY3NzX2tleWZyYW1lc19kcml2ZXInO1xuaW1wb3J0IHtjb250YWluc0VsZW1lbnQsIGludm9rZVF1ZXJ5LCBpc0Jyb3dzZXIsIG1hdGNoZXNFbGVtZW50LCB2YWxpZGF0ZVN0eWxlUHJvcGVydHl9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmltcG9ydCB7V2ViQW5pbWF0aW9uc1BsYXllcn0gZnJvbSAnLi93ZWJfYW5pbWF0aW9uc19wbGF5ZXInO1xuXG5leHBvcnQgY2xhc3MgV2ViQW5pbWF0aW9uc0RyaXZlciBpbXBsZW1lbnRzIEFuaW1hdGlvbkRyaXZlciB7XG4gIHByaXZhdGUgX2lzTmF0aXZlSW1wbCA9IC9cXHtcXHMqXFxbbmF0aXZlXFxzK2NvZGVcXF1cXHMqXFx9Ly50ZXN0KGdldEVsZW1lbnRBbmltYXRlRm4oKS50b1N0cmluZygpKTtcbiAgcHJpdmF0ZSBfY3NzS2V5ZnJhbWVzRHJpdmVyID0gbmV3IENzc0tleWZyYW1lc0RyaXZlcigpO1xuXG4gIHZhbGlkYXRlU3R5bGVQcm9wZXJ0eShwcm9wOiBzdHJpbmcpOiBib29sZWFuIHsgcmV0dXJuIHZhbGlkYXRlU3R5bGVQcm9wZXJ0eShwcm9wKTsgfVxuXG4gIG1hdGNoZXNFbGVtZW50KGVsZW1lbnQ6IGFueSwgc2VsZWN0b3I6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBtYXRjaGVzRWxlbWVudChlbGVtZW50LCBzZWxlY3Rvcik7XG4gIH1cblxuICBjb250YWluc0VsZW1lbnQoZWxtMTogYW55LCBlbG0yOiBhbnkpOiBib29sZWFuIHsgcmV0dXJuIGNvbnRhaW5zRWxlbWVudChlbG0xLCBlbG0yKTsgfVxuXG4gIHF1ZXJ5KGVsZW1lbnQ6IGFueSwgc2VsZWN0b3I6IHN0cmluZywgbXVsdGk6IGJvb2xlYW4pOiBhbnlbXSB7XG4gICAgcmV0dXJuIGludm9rZVF1ZXJ5KGVsZW1lbnQsIHNlbGVjdG9yLCBtdWx0aSk7XG4gIH1cblxuICBjb21wdXRlU3R5bGUoZWxlbWVudDogYW55LCBwcm9wOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSBhcyBhbnkpW3Byb3BdIGFzIHN0cmluZztcbiAgfVxuXG4gIG92ZXJyaWRlV2ViQW5pbWF0aW9uc1N1cHBvcnQoc3VwcG9ydGVkOiBib29sZWFuKSB7IHRoaXMuX2lzTmF0aXZlSW1wbCA9IHN1cHBvcnRlZDsgfVxuXG4gIGFuaW1hdGUoXG4gICAgICBlbGVtZW50OiBhbnksIGtleWZyYW1lczogybVTdHlsZURhdGFbXSwgZHVyYXRpb246IG51bWJlciwgZGVsYXk6IG51bWJlciwgZWFzaW5nOiBzdHJpbmcsXG4gICAgICBwcmV2aW91c1BsYXllcnM6IEFuaW1hdGlvblBsYXllcltdID0gW10sIHNjcnViYmVyQWNjZXNzUmVxdWVzdGVkPzogYm9vbGVhbik6IEFuaW1hdGlvblBsYXllciB7XG4gICAgY29uc3QgdXNlS2V5ZnJhbWVzID0gIXNjcnViYmVyQWNjZXNzUmVxdWVzdGVkICYmICF0aGlzLl9pc05hdGl2ZUltcGw7XG4gICAgaWYgKHVzZUtleWZyYW1lcykge1xuICAgICAgcmV0dXJuIHRoaXMuX2Nzc0tleWZyYW1lc0RyaXZlci5hbmltYXRlKFxuICAgICAgICAgIGVsZW1lbnQsIGtleWZyYW1lcywgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIHByZXZpb3VzUGxheWVycyk7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsbCA9IGRlbGF5ID09IDAgPyAnYm90aCcgOiAnZm9yd2FyZHMnO1xuICAgIGNvbnN0IHBsYXllck9wdGlvbnM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXJ9ID0ge2R1cmF0aW9uLCBkZWxheSwgZmlsbH07XG4gICAgLy8gd2UgY2hlY2sgZm9yIHRoaXMgdG8gYXZvaWQgaGF2aW5nIGEgbnVsbHx1bmRlZmluZWQgdmFsdWUgYmUgcHJlc2VudFxuICAgIC8vIGZvciB0aGUgZWFzaW5nICh3aGljaCByZXN1bHRzIGluIGFuIGVycm9yIGZvciBjZXJ0YWluIGJyb3dzZXJzICM5NzUyKVxuICAgIGlmIChlYXNpbmcpIHtcbiAgICAgIHBsYXllck9wdGlvbnNbJ2Vhc2luZyddID0gZWFzaW5nO1xuICAgIH1cblxuICAgIGNvbnN0IHByZXZpb3VzU3R5bGVzOiB7W2tleTogc3RyaW5nXTogYW55fSA9IHt9O1xuICAgIGNvbnN0IHByZXZpb3VzV2ViQW5pbWF0aW9uUGxheWVycyA9IDxXZWJBbmltYXRpb25zUGxheWVyW10+cHJldmlvdXNQbGF5ZXJzLmZpbHRlcihcbiAgICAgICAgcGxheWVyID0+IHBsYXllciBpbnN0YW5jZW9mIFdlYkFuaW1hdGlvbnNQbGF5ZXIpO1xuXG4gICAgaWYgKGFsbG93UHJldmlvdXNQbGF5ZXJTdHlsZXNNZXJnZShkdXJhdGlvbiwgZGVsYXkpKSB7XG4gICAgICBwcmV2aW91c1dlYkFuaW1hdGlvblBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xuICAgICAgICBsZXQgc3R5bGVzID0gcGxheWVyLmN1cnJlbnRTbmFwc2hvdDtcbiAgICAgICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKHByb3AgPT4gcHJldmlvdXNTdHlsZXNbcHJvcF0gPSBzdHlsZXNbcHJvcF0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAga2V5ZnJhbWVzID0ga2V5ZnJhbWVzLm1hcChzdHlsZXMgPT4gY29weVN0eWxlcyhzdHlsZXMsIGZhbHNlKSk7XG4gICAga2V5ZnJhbWVzID0gYmFsYW5jZVByZXZpb3VzU3R5bGVzSW50b0tleWZyYW1lcyhlbGVtZW50LCBrZXlmcmFtZXMsIHByZXZpb3VzU3R5bGVzKTtcbiAgICByZXR1cm4gbmV3IFdlYkFuaW1hdGlvbnNQbGF5ZXIoZWxlbWVudCwga2V5ZnJhbWVzLCBwbGF5ZXJPcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNXZWJBbmltYXRpb25zKCkge1xuICByZXR1cm4gdHlwZW9mIGdldEVsZW1lbnRBbmltYXRlRm4oKSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudEFuaW1hdGVGbigpOiBhbnkge1xuICByZXR1cm4gKGlzQnJvd3NlcigpICYmICg8YW55PkVsZW1lbnQpLnByb3RvdHlwZVsnYW5pbWF0ZSddKSB8fCB7fTtcbn1cbiJdfQ==